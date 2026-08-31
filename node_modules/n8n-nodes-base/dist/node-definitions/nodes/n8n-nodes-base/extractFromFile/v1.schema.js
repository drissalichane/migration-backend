/**
 * Extract from File Node - Version 1 - Zod Validation Schemas
 *
 * These schemas validate node configuration at runtime.
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  // Parameters schema
  const parametersSchema = z.object({
    operation: z.union([z.literal('csv'), z.literal('html'), z.literal('fromIcs'), z.literal('fromJson'), z.literal('ods'), z.literal('pdf'), z.literal('rtf'), z.literal('text'), z.literal('xml'), z.literal('xls'), z.literal('xlsx'), z.literal('binaryToPropery')]).optional(),
    binaryPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["csv","html","rtf","ods","xls","xlsx","binaryToPropery","fromJson","text","fromIcs","xml","pdf"]}}, defaults: {"operation":"csv"} }),
    options: resolveSchema({ parameters, schema: z.object({ delimiter: stringOrExpression.optional(), encoding: z.union([z.literal('ascii'), z.literal('latin1'), z.literal('ucs-2'), z.literal('ucs2'), z.literal('utf-8'), z.literal('utf16le'), z.literal('utf8'), expressionSchema]).optional(), enableBOM: booleanOrExpression.optional(), relaxQuotes: booleanOrExpression.optional(), headerRow: booleanOrExpression.optional(), includeEmptyCells: booleanOrExpression.optional(), maxRowCount: numberOrExpression.optional(), range: stringOrExpression.optional(), rawData: booleanOrExpression.optional(), readAsString: booleanOrExpression.optional(), sheetName: stringOrExpression.optional(), fromLine: numberOrExpression.optional(), skipRecordsWithErrors: z.unknown().optional(), stripBOM: booleanOrExpression.optional(), keepSource: z.union([z.literal('json'), z.literal('binary'), z.literal('both'), expressionSchema]).optional(), joinPages: booleanOrExpression.optional(), maxPages: numberOrExpression.optional(), password: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["csv","html","rtf","ods","xls","xlsx","binaryToPropery","fromJson","text","fromIcs","xml","pdf"]}}, defaults: {"operation":"csv"} }),
    destinationKey: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["binaryToPropery","fromJson","text","fromIcs","xml"]}}, defaults: {"operation":"csv"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};