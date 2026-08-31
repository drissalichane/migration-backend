using System;
using System.Collections.Generic;

namespace MigrationExecutionAPI.Utilities
{
    public static class CustomBodyParser
    {
        public static Dictionary<string, string> Parse(string body)
        {
            var result = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            if (string.IsNullOrWhiteSpace(body)) return result;

            var lines = body.Split(new[] { '\r', '\n' }, StringSplitOptions.None);
            string? currentKey = null;
            var currentValue = new System.Text.StringBuilder();

            foreach (var line in lines)
            {
                if (line.StartsWith("FILEPATH:", StringComparison.OrdinalIgnoreCase) || 
                    line.StartsWith("CONTENT:", StringComparison.OrdinalIgnoreCase) || 
                    line.StartsWith("TARGETCONTENT:", StringComparison.OrdinalIgnoreCase) || 
                    line.StartsWith("REPLACEMENTCONTENT:", StringComparison.OrdinalIgnoreCase) || 
                    line.StartsWith("PATTERN:", StringComparison.OrdinalIgnoreCase) || 
                    line.StartsWith("PROJECTFILE:", StringComparison.OrdinalIgnoreCase) || 
                    line.StartsWith("FRAMEWORK:", StringComparison.OrdinalIgnoreCase) || 
                    line.StartsWith("MESSAGE:", StringComparison.OrdinalIgnoreCase))
                {
                    if (currentKey != null)
                    {
                        result[currentKey] = currentValue.ToString().TrimEnd('\r', '\n');
                    }
                    
                    var colonIndex = line.IndexOf(':');
                    currentKey = line.Substring(0, colonIndex).Trim();
                    currentValue.Clear();
                    
                    var restOfLine = line.Substring(colonIndex + 1);
                    if (!string.IsNullOrWhiteSpace(restOfLine))
                    {
                        currentValue.AppendLine(restOfLine.TrimStart());
                    }
                }
                else if (currentKey != null)
                {
                    currentValue.AppendLine(line);
                }
            }

            if (currentKey != null)
            {
                result[currentKey] = currentValue.ToString().TrimEnd('\r', '\n');
            }

            return result;
        }
    }
}
