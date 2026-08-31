/**
 * Summarize Node - Version 1 - Zod Validation Schemas
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
    fieldsToSummarize: z.object({ values: z.array(z.object({ aggregation: z.union([z.literal('append'), z.literal('average'), z.literal('concatenate'), z.literal('count'), z.literal('countUnique'), z.literal('max'), z.literal('min'), z.literal('sum'), expressionSchema]).optional(), field: stringOrExpression.optional(), field: stringOrExpression.optional(), field: stringOrExpression.optional(), includeEmpty: booleanOrExpression.optional(), separateBy: z.union([z.literal(','), z.literal(', '), z.literal('\n'), z.literal(''), z.literal(' '), z.literal('other'), expressionSchema]).optional(), customSeparator: stringOrExpression.optional() })).optional() }).optional(),
    fieldsToSplitBy: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"/options.outputFormat":["singleItem"]},"hide":{"/options.outputFormat":["singleItem"]}} }),
    options: z.object({ continueIfFieldNotFound: booleanOrExpression.optional(), disableDotNotation: booleanOrExpression.optional(), outputFormat: z.union([z.literal('separateItems'), z.literal('singleItem'), expressionSchema]).optional(), skipEmptySplitFields: booleanOrExpression.optional() }).optional(),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};