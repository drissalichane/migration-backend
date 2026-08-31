/**
 * Compression Node - Version 1 - Zod Validation Schemas
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
    operation: z.union([z.literal('compress'), z.literal('decompress')]).optional(),
    binaryPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["compress","decompress"]}}, defaults: {"operation":"decompress"} }),
    outputFormat: resolveSchema({ parameters, schema: z.union([z.literal('gzip'), z.literal('zip'), expressionSchema]), required: false, displayOptions: {"show":{"operation":["compress"]}}, defaults: {"operation":"decompress"} }),
    fileName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["compress"],"outputFormat":["zip"]}}, defaults: {"operation":"decompress","outputFormat":""} }),
    binaryPropertyOutput: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"outputFormat":["zip"],"operation":["compress"]}}, defaults: {"outputFormat":"","operation":"decompress"} }),
    outputPrefix: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["compress","decompress"],"outputFormat":["gzip"]}}, defaults: {"operation":"decompress","outputFormat":""} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};