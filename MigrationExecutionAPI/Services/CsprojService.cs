using System.Xml.Linq;
using MigrationExecutionAPI.DTOs;
using MigrationExecutionAPI.Interfaces;
using MigrationExecutionAPI.Utilities;

namespace MigrationExecutionAPI.Services;

public class CsprojService : ICsprojService
{
    private readonly ILogger<CsprojService> _logger;

    public CsprojService(ILogger<CsprojService> logger)
    {
        _logger = logger;
    }

    public async Task UpdateCsprojAsync(UpdateCsprojRequest request)
    {
        string targetProjectFile = request.ProjectFile;

        // Auto-detect or resolve partial paths
        var csprojFiles = Directory.GetFiles(request.RepositoryPath, "*.csproj", SearchOption.AllDirectories);
        if (csprojFiles.Length == 0)
        {
            throw new FileNotFoundException("No .csproj file found in the repository.");
        }

        if (string.IsNullOrWhiteSpace(targetProjectFile))
        {
            if (csprojFiles.Length > 1)
            {
                throw new ArgumentException("Multiple .csproj files found. Please specify the projectFile.");
            }
            targetProjectFile = Path.GetRelativePath(request.RepositoryPath, csprojFiles[0]);
        }
        else
        {
            // If the AI provided just the filename or a partial path, try to find a match
            var match = csprojFiles.FirstOrDefault(f => f.EndsWith(targetProjectFile.Replace("/", "\\"), StringComparison.OrdinalIgnoreCase));
            if (match == null)
            {
                throw new FileNotFoundException($"Project file '{targetProjectFile}' not found in the repository.");
            }
            targetProjectFile = Path.GetRelativePath(request.RepositoryPath, match);
        }

        _logger.LogInformation("Updating project file {ProjectFile} in repository {RepositoryPath}", targetProjectFile, request.RepositoryPath);

        var fullPath = PathValidator.GetValidatedFullPath(request.RepositoryPath, targetProjectFile);

        var content = await File.ReadAllTextAsync(fullPath);
        var doc = XDocument.Parse(content);
        var projectNode = doc.Element("Project");

        if (projectNode == null)
        {
            throw new InvalidOperationException("Invalid csproj format. Missing <Project> root node.");
        }

        // We assume there's a PropertyGroup, or we'll create one
        var propertyGroup = projectNode.Elements("PropertyGroup").FirstOrDefault();
        if (propertyGroup == null)
        {
            propertyGroup = new XElement("PropertyGroup");
            projectNode.AddFirst(propertyGroup);
        }

        if (!string.IsNullOrEmpty(request.Framework))
        {
            UpdateOrCreateElement(propertyGroup, "TargetFramework", request.Framework);
        }

        if (!string.IsNullOrEmpty(request.Nullable))
        {
            UpdateOrCreateElement(propertyGroup, "Nullable", request.Nullable);
        }

        if (!string.IsNullOrEmpty(request.ImplicitUsings))
        {
            UpdateOrCreateElement(propertyGroup, "ImplicitUsings", request.ImplicitUsings);
        }

        if (request.Packages != null && request.Packages.Any())
        {
            var itemGroup = projectNode.Elements("ItemGroup")
                .FirstOrDefault(ig => ig.Elements("PackageReference").Any());

            if (itemGroup == null)
            {
                itemGroup = new XElement("ItemGroup");
                projectNode.Add(itemGroup);
            }

            foreach (var package in request.Packages)
            {
                var pkgNode = itemGroup.Elements("PackageReference")
                    .FirstOrDefault(x => x.Attribute("Include")?.Value == package.Name);

                if (pkgNode != null)
                {
                    pkgNode.SetAttributeValue("Version", package.Version);
                }
                else
                {
                    itemGroup.Add(new XElement("PackageReference", 
                        new XAttribute("Include", package.Name),
                        new XAttribute("Version", package.Version)));
                }
            }
        }

        // Save back to file using XMLWriter with indentation
        var settings = new System.Xml.XmlWriterSettings
        {
            Indent = true,
            OmitXmlDeclaration = true // .NET Core style csproj usually omit it
        };

        using var writer = System.Xml.XmlWriter.Create(fullPath, settings);
        doc.Save(writer);
    }

    private void UpdateOrCreateElement(XElement parent, string name, string value)
    {
        var element = parent.Element(name);
        if (element != null)
        {
            element.Value = value;
        }
        else
        {
            parent.Add(new XElement(name, value));
        }
    }
}
