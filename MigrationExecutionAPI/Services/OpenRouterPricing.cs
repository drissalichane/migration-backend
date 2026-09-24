using System.Globalization;
using System.Text.Json.Nodes;

namespace MigrationExecutionAPI.Services;

/// <summary>
/// Per-token list prices for the models the pipeline runs, read live from OpenRouter's public
/// model catalogue (https://openrouter.ai/api/v1/models, no API key needed) and cached in memory.
///
/// Cost is the one number n8n cannot give us. Its execution records carry the provider's real
/// token counts but no cost, and no OpenRouter generation id to look one up with. So everything
/// here is tokens x list price - an ESTIMATE, labelled as one wherever it is shown. OpenRouter's
/// activity tab stays the source of truth for what was actually billed.
///
/// Reading the catalogue rather than hardcoding a table is deliberate: prices change, and a stale
/// constant in C# would go on being quoted as fact long after it stopped being true.
/// </summary>
public class OpenRouterPricing
{
    private const string CatalogueUrl = "https://openrouter.ai/api/v1/models";
    private static readonly TimeSpan Ttl = TimeSpan.FromHours(6);

    private readonly IHttpClientFactory _httpFactory;
    private readonly ILogger<OpenRouterPricing> _logger;
    private readonly SemaphoreSlim _gate = new(1, 1);

    private Dictionary<string, ModelPrice> _prices = new(StringComparer.OrdinalIgnoreCase);
    private DateTime _fetchedAtUtc = DateTime.MinValue;

    public OpenRouterPricing(IHttpClientFactory httpFactory, ILogger<OpenRouterPricing> logger)
    {
        _httpFactory = httpFactory;
        _logger = logger;
    }

    /// <summary>A time window with its own rate. OpenRouter uses these for off-peak pricing.</summary>
    public record PriceWindow(HashSet<string> Days, int? StartHhmm, int? EndHhmm, decimal Prompt, decimal Completion);

    public record ModelPrice(string Id, decimal Prompt, decimal Completion, List<PriceWindow> Windows);

    /// <summary>
    /// Cost in USD for one call. <paramref name="atUtc"/> is the call's own start time, because
    /// some models (deepseek-v4.1-flash among them) price peak hours at twice off-peak - using a
    /// single rate for a whole run would be out by 2x on the model that dominates Part 1's tokens.
    /// </summary>
    public static decimal CostOf(ModelPrice price, int promptTokens, int completionTokens, DateTime atUtc)
    {
        var (p, c) = RateAt(price, atUtc);
        return promptTokens * p + completionTokens * c;
    }

    private static (decimal Prompt, decimal Completion) RateAt(ModelPrice price, DateTime atUtc)
    {
        foreach (var w in price.Windows)
        {
            if (w.Days.Count > 0 && !w.Days.Contains(atUtc.DayOfWeek.ToString().ToLowerInvariant())) continue;
            if (w.StartHhmm is null || w.EndHhmm is null) return (w.Prompt, w.Completion);

            var t = atUtc.Hour * 100 + atUtc.Minute;
            int s = w.StartHhmm.Value, e = w.EndHhmm.Value;
            // An end at or before the start wraps past midnight (e.g. 10:00 -> 00:00).
            var inside = s <= e ? (t >= s && t < e) : (t >= s || t < e);
            if (inside) return (w.Prompt, w.Completion);
        }
        return (price.Prompt, price.Completion);
    }

    /// <summary>
    /// The price for a model id as the workflow spells it. OpenRouter variant suffixes
    /// (":floor", ":nitro", ":free") are routing hints, not separate catalogue entries - the
    /// Error Fixer's model is configured as "z-ai/glm-5.3-flash:floor" - so fall back to the
    /// bare id. Returns null for a model the catalogue does not list, and the caller then
    /// records real tokens with no cost rather than inventing one.
    /// </summary>
    public async Task<ModelPrice?> GetAsync(string? modelId, CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(modelId)) return null;
        await EnsureLoadedAsync(ct);

        if (_prices.TryGetValue(modelId, out var exact)) return exact;

        var colon = modelId.LastIndexOf(':');
        if (colon > 0 && _prices.TryGetValue(modelId[..colon], out var bare)) return bare;

        return null;
    }

    private async Task EnsureLoadedAsync(CancellationToken ct)
    {
        if (_prices.Count > 0 && DateTime.UtcNow - _fetchedAtUtc < Ttl) return;

        await _gate.WaitAsync(ct);
        try
        {
            if (_prices.Count > 0 && DateTime.UtcNow - _fetchedAtUtc < Ttl) return;

            var body = await _httpFactory.CreateClient().GetStringAsync(CatalogueUrl, ct);
            var models = JsonNode.Parse(body)?["data"] as JsonArray;
            if (models is null) return;

            var next = new Dictionary<string, ModelPrice>(StringComparer.OrdinalIgnoreCase);
            foreach (var m in models)
            {
                var id = m?["id"]?.ToString();
                var pricing = m?["pricing"];
                if (string.IsNullOrWhiteSpace(id) || pricing is null) continue;

                var windows = new List<PriceWindow>();
                if (pricing["overrides"] is JsonArray overrides)
                {
                    foreach (var o in overrides)
                    {
                        if (o is null) continue;
                        var days = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
                        if (o["utc_days"] is JsonArray d)
                            foreach (var day in d) { var s = day?.ToString(); if (!string.IsNullOrWhiteSpace(s)) days.Add(s); }

                        windows.Add(new PriceWindow(
                            days,
                            AsInt(o["utc_start"]),
                            AsInt(o["utc_end"]),
                            AsDecimal(o["prompt"]),
                            AsDecimal(o["completion"])));
                    }
                }

                next[id] = new ModelPrice(id, AsDecimal(pricing["prompt"]), AsDecimal(pricing["completion"]), windows);
            }

            if (next.Count > 0)
            {
                _prices = next;
                _fetchedAtUtc = DateTime.UtcNow;
                _logger.LogInformation("OpenRouter price catalogue loaded: {Count} models", next.Count);
            }
        }
        catch (Exception ex)
        {
            // A pricing blip must never cost us the token counts, which are the measured part.
            _logger.LogWarning(ex, "Could not load the OpenRouter price catalogue; costs will be omitted");
        }
        finally
        {
            _gate.Release();
        }
    }

    // Prices come back as decimal strings ("0.00000015"); parse invariantly so a comma locale
    // cannot turn a price into a different number.
    private static decimal AsDecimal(JsonNode? n) =>
        n is not null && decimal.TryParse(n.ToString(), NumberStyles.Float, CultureInfo.InvariantCulture, out var d) ? d : 0m;

    private static int? AsInt(JsonNode? n) =>
        n is not null && int.TryParse(n.ToString(), NumberStyles.Integer, CultureInfo.InvariantCulture, out var i) ? i : null;
}
