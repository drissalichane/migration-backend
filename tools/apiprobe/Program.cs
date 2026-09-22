// apiprobe - prints the public API of a type from a NuGet package's compiled DLL.
//
// Why: no tool in the pipeline grounded a third-party package's API. On job 101 the
// Error Fixer met CS1729 on AutoMapper 15's MapperConfiguration, searched Microsoft
// Learn (which does not document AutoMapper) 20 times across two attempts, and hit
// its step limit twice. The package's own XML documentation does not help either:
// AutoMapper.xml lists 271 members and not those constructors. The DLL has them.
//
// The DLL is read with System.Reflection.Metadata: nothing is loaded or executed, and
// no dependency has to resolve (a parameter of type ILoggerFactory prints as its name).
//
// Usage:
//   apiprobe --workspace /projects/migration-101 --package AutoMapper --type MapperConfiguration
//            [--member CreateMapper] [--tfm net9.0] [--nuget /home/node/.nuget/packages]
//
// The version is the one the workspace's .csproj files reference; the lib/ folder is the
// best match for the target framework.
using System.Reflection;
using System.Reflection.Metadata;
using System.Reflection.PortableExecutable;
using System.Text;
using System.Text.RegularExpressions;

var opts = ParseArgs(args);
var workspace = opts.GetValueOrDefault("workspace", "");
var package = opts.GetValueOrDefault("package", "");
var typeQuery = opts.GetValueOrDefault("type", "");
var memberQuery = opts.GetValueOrDefault("member", "");
var tfm = opts.GetValueOrDefault("tfm", "net8.0").ToLowerInvariant();
var nuget = opts.GetValueOrDefault("nuget", Environment.GetEnvironmentVariable("NUGET_PACKAGES")
    ?? Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), ".nuget", "packages"));
const int MaxChars = 12000;

if (package.Length == 0 || typeQuery.Length == 0)
{
    Console.WriteLine("ERROR: --package and --type are required.");
    return;
}

// ── 1. which version, which DLLs ────────────────────────────────────────────
var pkgDir = Path.Combine(nuget, package.ToLowerInvariant());
if (!Directory.Exists(pkgDir))
{
    Console.WriteLine($"{package} is not in the NuGet cache ({nuget}). It is restored by the first build - run build, then ask again.");
    return;
}
var version = ReferencedVersion(workspace, package);
var versions = Directory.GetDirectories(pkgDir).Select(Path.GetFileName).Where(v => v != null).Cast<string>().ToList();
string? note = null;
if (version == null || !versions.Contains(version, StringComparer.OrdinalIgnoreCase))
{
    var fallback = versions.OrderByDescending(v => v, VersionComparer.Instance).FirstOrDefault();
    if (fallback == null) { Console.WriteLine($"{package}: no version in the NuGet cache."); return; }
    note = version == null
        ? $"(no .csproj in the workspace references {package}; showing the newest cached version)"
        : $"(the workspace references {version}, which is not in the cache; showing {fallback})";
    version = fallback;
}
var libRoot = Path.Combine(pkgDir, version, "lib");
if (!Directory.Exists(libRoot)) { Console.WriteLine($"{package} {version} has no lib/ folder (a build-time or meta package)."); return; }
var tfmDirs = Directory.GetDirectories(libRoot).Select(d => Path.GetFileName(d)!.ToLowerInvariant()).ToList();
var chosenTfm = Ladder(tfm).FirstOrDefault(t => tfmDirs.Contains(t)) ?? tfmDirs.OrderByDescending(t => t).FirstOrDefault();
if (chosenTfm == null) { Console.WriteLine($"{package} {version}: lib/ is empty."); return; }
var dlls = Directory.GetFiles(Path.Combine(libRoot, chosenTfm), "*.dll");

var output = new StringBuilder();
output.AppendLine($"{package} {version} - lib/{chosenTfm}{(note != null ? " " + note : "")}");

// ── 2. find the type ────────────────────────────────────────────────────────
var matches = new List<(MetadataReader R, TypeDefinition T)>();
var similar = new SortedSet<string>(StringComparer.Ordinal);
var extensionHits = new List<string>();
var readers = new List<PEReader>();
foreach (var dll in dlls)
{
    var pe = new PEReader(File.OpenRead(dll));
    if (!pe.HasMetadata) continue;
    readers.Add(pe);
    var r = pe.GetMetadataReader();
    foreach (var h in r.TypeDefinitions)
    {
        var t = r.GetTypeDefinition(h);
        if (!IsPublicType(r, t)) continue;
        var full = TypeName(r, t);
        var simple = StripArity(r.GetString(t.Name));
        if (simple.Equals(typeQuery, StringComparison.OrdinalIgnoreCase) || full.Equals(typeQuery, StringComparison.OrdinalIgnoreCase)
            || StripArity(full).Equals(typeQuery, StringComparison.OrdinalIgnoreCase))
            matches.Add((r, t));
        else if (full.Contains(typeQuery, StringComparison.OrdinalIgnoreCase))
            similar.Add(full);
        // An extension method asked for by name (AddAutoMapper) rather than a type.
        foreach (var mh in t.GetMethods())
        {
            var m = r.GetMethodDefinition(mh);
            if ((m.Attributes & MethodAttributes.MemberAccessMask) == MethodAttributes.Public
                && r.GetString(m.Name).Equals(typeQuery, StringComparison.OrdinalIgnoreCase))
                extensionHits.Add($"  {full}: {MethodLine(r, t, m)}");
        }
    }
}

if (matches.Count == 0)
{
    if (extensionHits.Count > 0)
    {
        output.AppendLine($"No type named {typeQuery}, but public methods with that name:");
        foreach (var l in extensionHits.Take(40)) output.AppendLine(l);
    }
    else
    {
        output.AppendLine($"No public type named {typeQuery} in {package} {version}.");
        if (similar.Count > 0) output.AppendLine("Public types whose name contains it: " + string.Join(", ", similar.Take(25)));
        else output.AppendLine("Ask with the exact type name, e.g. the one in the compiler error.");
    }
    Emit(output);
    return;
}

// ── 3. print it ─────────────────────────────────────────────────────────────
foreach (var (r, t) in matches)
{
    output.AppendLine();
    output.AppendLine(TypeHeader(r, t));
    var obsolete = ObsoleteMessage(r, t.GetCustomAttributes());
    if (obsolete != null) output.AppendLine($"  [Obsolete] {obsolete}");
    var lines = new List<(int Order, string Name, string Text)>();
    foreach (var mh in t.GetMethods())
    {
        var m = r.GetMethodDefinition(mh);
        if ((m.Attributes & MethodAttributes.MemberAccessMask) != MethodAttributes.Public) continue;
        var name = r.GetString(m.Name);
        var special = (m.Attributes & MethodAttributes.SpecialName) != 0;
        if (special && name != ".ctor" && name != ".cctor") continue;   // property and event accessors
        if (name == ".cctor") continue;
        var ob = ObsoleteMessage(r, m.GetCustomAttributes());
        lines.Add((name == ".ctor" ? 0 : 2, name == ".ctor" ? "ctor" : name, MethodLine(r, t, m) + (ob != null ? $"   [Obsolete: {ob}]" : "")));
    }
    foreach (var ph in t.GetProperties())
    {
        var p = r.GetPropertyDefinition(ph);
        var acc = p.GetAccessors();
        bool pub(MethodDefinitionHandle a) => !a.IsNil && (r.GetMethodDefinition(a).Attributes & MethodAttributes.MemberAccessMask) == MethodAttributes.Public;
        if (!pub(acc.Getter) && !pub(acc.Setter)) continue;
        var any = !acc.Getter.IsNil ? acc.Getter : acc.Setter;
        var isStatic = (r.GetMethodDefinition(any).Attributes & MethodAttributes.Static) != 0;
        var sig = p.DecodeSignature(new Names(r), new Ctx(GenericNames(r, t.GetGenericParameters()), Array.Empty<string>()));
        var ob = ObsoleteMessage(r, p.GetCustomAttributes());
        lines.Add((1, r.GetString(p.Name), $"{(isStatic ? "static " : "")}{sig.ReturnType} {r.GetString(p.Name)} {{ {(pub(acc.Getter) ? "get; " : "")}{(pub(acc.Setter) ? "set; " : "")}}}{(ob != null ? $"   [Obsolete: {ob}]" : "")}"));
    }
    foreach (var fh in t.GetFields())
    {
        var f = r.GetFieldDefinition(fh);
        if ((f.Attributes & FieldAttributes.FieldAccessMask) != FieldAttributes.Public) continue;
        if ((f.Attributes & FieldAttributes.SpecialName) != 0) continue;   // enum value__
        var ftype = f.DecodeSignature(new Names(r), new Ctx(GenericNames(r, t.GetGenericParameters()), Array.Empty<string>()));
        var isEnum = BaseTypeName(r, t) == "System.Enum";
        lines.Add((3, r.GetString(f.Name), isEnum ? r.GetString(f.Name) : $"{((f.Attributes & FieldAttributes.Static) != 0 ? "static " : "")}{ftype} {r.GetString(f.Name)}"));
    }
    var shown = lines.Where(l => memberQuery.Length == 0 || l.Name.Equals(memberQuery, StringComparison.OrdinalIgnoreCase)
                                 || (memberQuery.Equals(".ctor", StringComparison.OrdinalIgnoreCase) && l.Name == "ctor"))
                     .OrderBy(l => l.Order).ThenBy(l => l.Name, StringComparer.Ordinal).ToList();
    if (memberQuery.Length > 0 && shown.Count == 0)
        output.AppendLine($"  (no public member named {memberQuery}; it has: {string.Join(", ", lines.Select(l => l.Name).Distinct().Take(40))})");
    foreach (var l in shown) output.AppendLine("  " + l.Text);
}
Emit(output);
foreach (var pe in readers) pe.Dispose();

// ════════════════════════════════════════════════════════════════════════════
static void Emit(StringBuilder sb)
{
    var s = sb.ToString();
    Console.Write(s.Length <= MaxChars ? s : s[..MaxChars] + "\n...(truncated - ask for one member with member=<name>)\n");
}

static Dictionary<string, string> ParseArgs(string[] a)
{
    var d = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
    for (int i = 0; i + 1 < a.Length; i += 2) if (a[i].StartsWith("--")) d[a[i][2..]] = a[i + 1];
    return d;
}

static string? ReferencedVersion(string workspace, string package)
{
    if (workspace.Length == 0 || !Directory.Exists(workspace)) return null;
    var re = new Regex("<PackageReference\\s+Include=\"" + Regex.Escape(package) + "\"\\s+Version=\"([^\"]+)\"", RegexOptions.IgnoreCase);
    foreach (var proj in Directory.EnumerateFiles(workspace, "*.csproj", SearchOption.AllDirectories))
    {
        if (proj.Replace('\\', '/').Split('/').Any(s => s is "bin" or "obj")) continue;
        var m = re.Match(File.ReadAllText(proj));
        if (m.Success) return m.Groups[1].Value;
    }
    return null;
}

static IEnumerable<string> Ladder(string tfm)
{
    var core = new[] { "net10.0", "net9.0", "net8.0", "net7.0", "net6.0", "net5.0", "netcoreapp3.1", "netcoreapp3.0", "netcoreapp2.1" };
    var i = Array.IndexOf(core, tfm);
    foreach (var t in i >= 0 ? core.Skip(i) : core.Skip(Array.IndexOf(core, "net8.0"))) yield return t;
    foreach (var t in new[] { "netstandard2.1", "netstandard2.0", "netstandard1.6", "netstandard1.3", "netstandard1.0" }) yield return t;
}

static bool IsPublicType(MetadataReader r, TypeDefinition t)
{
    var vis = t.Attributes & TypeAttributes.VisibilityMask;
    if (vis == TypeAttributes.Public) return true;
    if (vis != TypeAttributes.NestedPublic) return false;
    return IsPublicType(r, r.GetTypeDefinition(t.GetDeclaringType()));
}

static string StripArity(string name) { var i = name.IndexOf('`'); return i < 0 ? name : name[..i]; }

static string TypeName(MetadataReader r, TypeDefinition t)
{
    var name = r.GetString(t.Name);
    if (!t.GetDeclaringType().IsNil) return TypeName(r, r.GetTypeDefinition(t.GetDeclaringType())) + "." + name;
    var ns = r.GetString(t.Namespace);
    return ns.Length > 0 ? ns + "." + name : name;
}

static string[] GenericNames(MetadataReader r, GenericParameterHandleCollection ps) =>
    ps.Select(h => r.GetString(r.GetGenericParameter(h).Name)).ToArray();

static string? BaseTypeName(MetadataReader r, TypeDefinition t) =>
    t.BaseType.IsNil ? null : EntityName(r, t.BaseType, new Ctx(GenericNames(r, t.GetGenericParameters()), Array.Empty<string>()));

static string EntityName(MetadataReader r, EntityHandle h, Ctx ctx) => h.Kind switch
{
    HandleKind.TypeDefinition => TypeName(r, r.GetTypeDefinition((TypeDefinitionHandle)h)),
    HandleKind.TypeReference => Names.RefName(r, (TypeReferenceHandle)h),
    HandleKind.TypeSpecification => r.GetTypeSpecification((TypeSpecificationHandle)h).DecodeSignature(new Names(r), ctx),
    _ => "?"
};

static string TypeHeader(MetadataReader r, TypeDefinition t)
{
    var a = t.Attributes;
    var baseName = BaseTypeName(r, t);
    var kind = (a & TypeAttributes.Interface) != 0 ? "interface"
        : baseName == "System.Enum" ? "enum"
        : baseName == "System.ValueType" ? "struct"
        : baseName == "System.MulticastDelegate" ? "delegate"
        : (a & TypeAttributes.Abstract) != 0 && (a & TypeAttributes.Sealed) != 0 ? "static class"
        : (a & TypeAttributes.Abstract) != 0 ? "abstract class" : "class";
    var gen = GenericNames(r, t.GetGenericParameters());
    var name = StripArity(TypeName(r, t)) + (gen.Length > 0 ? "<" + string.Join(", ", gen) + ">" : "");
    var ctx = new Ctx(gen, Array.Empty<string>());
    var bases = new List<string>();
    if (baseName != null && kind is "class" or "abstract class" && baseName != "System.Object") bases.Add(baseName);
    foreach (var ih in t.GetInterfaceImplementations()) bases.Add(EntityName(r, r.GetInterfaceImplementation(ih).Interface, ctx));
    return $"{kind} {name}{(bases.Count > 0 ? " : " + string.Join(", ", bases) : "")}";
}

static string MethodLine(MetadataReader r, TypeDefinition t, MethodDefinition m)
{
    var ctx = new Ctx(GenericNames(r, t.GetGenericParameters()), GenericNames(r, m.GetGenericParameters()));
    var sig = m.DecodeSignature(new Names(r), ctx);
    var pnames = new string?[sig.ParameterTypes.Length];
    var optional = new bool[sig.ParameterTypes.Length];
    var isParams = new bool[sig.ParameterTypes.Length];
    foreach (var ph in m.GetParameters())
    {
        var p = r.GetParameter(ph);
        if (p.SequenceNumber < 1 || p.SequenceNumber > pnames.Length) continue;
        pnames[p.SequenceNumber - 1] = r.GetString(p.Name);
        optional[p.SequenceNumber - 1] = (p.Attributes & ParameterAttributes.Optional) != 0;
        isParams[p.SequenceNumber - 1] = HasAttribute(r, p.GetCustomAttributes(), "ParamArrayAttribute");
    }
    var isExt = HasAttribute(r, m.GetCustomAttributes(), "ExtensionAttribute");
    var ps = sig.ParameterTypes.Select((pt, i) =>
        (i == 0 && isExt ? "this " : "") + (isParams[i] ? "params " : "") + pt + " " + (pnames[i] ?? "p" + i) + (optional[i] ? " = …" : ""));
    var name = r.GetString(m.Name);
    var isStatic = (m.Attributes & MethodAttributes.Static) != 0;
    var mgen = GenericNames(r, m.GetGenericParameters());
    var gen = mgen.Length > 0 ? "<" + string.Join(", ", mgen) + ">" : "";
    return name == ".ctor"
        ? $"ctor({string.Join(", ", ps)})"
        : $"{(isStatic ? "static " : "")}{sig.ReturnType} {name}{gen}({string.Join(", ", ps)})";
}

static string AttributeTypeName(MetadataReader r, CustomAttribute ca)
{
    EntityHandle parent = ca.Constructor.Kind switch
    {
        HandleKind.MemberReference => r.GetMemberReference((MemberReferenceHandle)ca.Constructor).Parent,
        HandleKind.MethodDefinition => r.GetMethodDefinition((MethodDefinitionHandle)ca.Constructor).GetDeclaringType(),
        _ => default
    };
    return parent.Kind switch
    {
        HandleKind.TypeReference => r.GetString(r.GetTypeReference((TypeReferenceHandle)parent).Name),
        HandleKind.TypeDefinition => r.GetString(r.GetTypeDefinition((TypeDefinitionHandle)parent).Name),
        _ => ""
    };
}

static bool HasAttribute(MetadataReader r, CustomAttributeHandleCollection cas, string name) =>
    cas.Any(h => AttributeTypeName(r, r.GetCustomAttribute(h)) == name);

static string? ObsoleteMessage(MetadataReader r, CustomAttributeHandleCollection cas)
{
    foreach (var h in cas)
    {
        var ca = r.GetCustomAttribute(h);
        if (AttributeTypeName(r, ca) != "ObsoleteAttribute") continue;
        var blob = r.GetBlobReader(ca.Value);
        // prolog 0x0001, then the fixed arguments; [Obsolete] with no message has none.
        if (blob.Length > 4 && blob.ReadUInt16() == 1)
        {
            try { return blob.ReadSerializedString() ?? "obsolete"; } catch { }
        }
        return "obsolete";
    }
    return null;
}

sealed record Ctx(string[] TypeParams, string[] MethodParams);

sealed class Names : ISignatureTypeProvider<string, Ctx>
{
    private readonly MetadataReader _r;
    public Names(MetadataReader r) { _r = r; }

    public string GetPrimitiveType(PrimitiveTypeCode c) => c switch
    {
        PrimitiveTypeCode.Boolean => "bool", PrimitiveTypeCode.Byte => "byte", PrimitiveTypeCode.SByte => "sbyte",
        PrimitiveTypeCode.Char => "char", PrimitiveTypeCode.Int16 => "short", PrimitiveTypeCode.UInt16 => "ushort",
        PrimitiveTypeCode.Int32 => "int", PrimitiveTypeCode.UInt32 => "uint", PrimitiveTypeCode.Int64 => "long",
        PrimitiveTypeCode.UInt64 => "ulong", PrimitiveTypeCode.Single => "float", PrimitiveTypeCode.Double => "double",
        PrimitiveTypeCode.String => "string", PrimitiveTypeCode.Object => "object", PrimitiveTypeCode.Void => "void",
        PrimitiveTypeCode.IntPtr => "nint", PrimitiveTypeCode.UIntPtr => "nuint",
        PrimitiveTypeCode.TypedReference => "TypedReference", _ => c.ToString()
    };
    public string GetTypeFromDefinition(MetadataReader r, TypeDefinitionHandle h, byte k)
    {
        var t = r.GetTypeDefinition(h);
        var name = r.GetString(t.Name);
        if (!t.GetDeclaringType().IsNil) return GetTypeFromDefinition(r, t.GetDeclaringType(), k) + "." + name;
        var ns = r.GetString(t.Namespace);
        return ns.Length > 0 ? ns + "." + name : name;
    }
    public string GetTypeFromReference(MetadataReader r, TypeReferenceHandle h, byte k) => RefName(r, h);
    public static string RefName(MetadataReader r, TypeReferenceHandle h)
    {
        var t = r.GetTypeReference(h);
        var name = r.GetString(t.Name);
        if (t.ResolutionScope.Kind == HandleKind.TypeReference) return RefName(r, (TypeReferenceHandle)t.ResolutionScope) + "." + name;
        var ns = r.GetString(t.Namespace);
        return ns.Length > 0 ? ns + "." + name : name;
    }
    public string GetTypeFromSpecification(MetadataReader r, Ctx c, TypeSpecificationHandle h, byte k) =>
        r.GetTypeSpecification(h).DecodeSignature(this, c);
    public string GetSZArrayType(string e) => e + "[]";
    public string GetArrayType(string e, ArrayShape s) => e + "[" + new string(',', Math.Max(0, s.Rank - 1)) + "]";
    public string GetByReferenceType(string e) => "ref " + e;
    public string GetPointerType(string e) => e + "*";
    public string GetPinnedType(string e) => e;
    public string GetModifiedType(string modifier, string unmodified, bool isRequired) => unmodified;
    public string GetFunctionPointerType(MethodSignature<string> s) => "delegate*<" + string.Join(", ", s.ParameterTypes.Append(s.ReturnType)) + ">";
    public string GetGenericInstantiation(string g, System.Collections.Immutable.ImmutableArray<string> a)
    {
        var baseName = g.Contains('`') ? g[..g.IndexOf('`')] : g;
        if (baseName == "System.Nullable" && a.Length == 1) return a[0] + "?";
        return baseName + "<" + string.Join(", ", a) + ">";
    }
    public string GetGenericMethodParameter(Ctx c, int i) => i < c.MethodParams.Length ? c.MethodParams[i] : "TM" + i;
    public string GetGenericTypeParameter(Ctx c, int i) => i < c.TypeParams.Length ? c.TypeParams[i] : "T" + i;
}

sealed class VersionComparer : IComparer<string>
{
    public static readonly VersionComparer Instance = new();
    public int Compare(string? a, string? b)
    {
        var pa = (a ?? "").Split('-')[0].Split('.'); var pb = (b ?? "").Split('-')[0].Split('.');
        for (int i = 0; i < Math.Max(pa.Length, pb.Length); i++)
        {
            int.TryParse(i < pa.Length ? pa[i] : "0", out var x); int.TryParse(i < pb.Length ? pb[i] : "0", out var y);
            if (x != y) return x.CompareTo(y);
        }
        return 0;
    }
}
