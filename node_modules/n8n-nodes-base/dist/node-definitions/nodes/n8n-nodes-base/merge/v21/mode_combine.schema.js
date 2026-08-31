/**
 * Merge Node - Version 2.1 - Zod Schema
 * Discriminator: mode=combine
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  return z.object({
    parameters: z.object({
      mode: z.literal('combine'),
      combinationMode: z.union([z.literal('mergeByFields'), z.literal('mergeByPosition'), z.literal('multiplex'), expressionSchema]).optional(),
      mergeByFields: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ field1: stringOrExpression.optional(), field2: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"combinationMode":["mergeByFields"]}}, defaults: {"combinationMode":"mergeByFields"} }),
      joinMode: resolveSchema({ parameters, schema: z.union([z.literal('keepMatches'), z.literal('keepNonMatches'), z.literal('keepEverything'), z.literal('enrichInput1'), z.literal('enrichInput2'), expressionSchema]), required: false, displayOptions: {"show":{"combinationMode":["mergeByFields"]}}, defaults: {"combinationMode":"mergeByFields"} }),
      outputDataFrom: resolveSchema({ parameters, schema: z.union([z.literal('both'), z.literal('input1'), z.literal('input2'), expressionSchema]), required: false, displayOptions: {"show":{"combinationMode":["mergeByFields"],"joinMode":["keepMatches","keepNonMatches"]}}, defaults: {"combinationMode":"mergeByFields","joinMode":"keepMatches"} }),
      options: z.object({ clashHandling: z.unknown().optional(), clashHandling: z.unknown().optional(), clashHandling: z.unknown().optional(), disableDotNotation: booleanOrExpression.optional(), fuzzyCompare: booleanOrExpression.optional(), includeUnpaired: booleanOrExpression.optional(), multipleMatches: z.union([z.literal('all'), z.literal('first'), expressionSchema]).optional(), multipleMatches: z.union([z.literal('all'), z.literal('first'), expressionSchema]).optional() }).optional(),
    }).optional(),
  });
};