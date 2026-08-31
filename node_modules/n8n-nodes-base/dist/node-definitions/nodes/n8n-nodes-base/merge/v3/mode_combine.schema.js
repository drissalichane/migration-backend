/**
 * Merge Node - Version 3 - Zod Schema
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
      combineBy: z.union([z.literal('combineByFields'), z.literal('combineByPosition'), z.literal('combineAll')]).optional(),
      options: resolveSchema({ parameters, schema: z.object({ clashHandling: z.unknown().optional(), fuzzyCompare: booleanOrExpression.optional(), disableDotNotation: booleanOrExpression.optional(), multipleMatches: z.union([z.literal('all'), z.literal('first'), expressionSchema]).optional(), multipleMatches: z.union([z.literal('all'), z.literal('first'), expressionSchema]).optional(), includeUnpaired: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"combineBy":["combineAll","combineByFields","combineByPosition"]}}, defaults: {"combineBy":"combineByFields"} }),
      advanced: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"combineBy":["combineByFields"]}}, defaults: {"combineBy":"combineByFields"} }),
      fieldsToMatchString: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"advanced":[false],"combineBy":["combineByFields"]}}, defaults: {"advanced":false,"combineBy":"combineByFields"} }),
      mergeByFields: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ field1: stringOrExpression.optional(), field2: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"advanced":[true],"combineBy":["combineByFields"]}}, defaults: {"advanced":false,"combineBy":"combineByFields"} }),
      joinMode: resolveSchema({ parameters, schema: z.union([z.literal('keepMatches'), z.literal('keepNonMatches'), z.literal('keepEverything'), z.literal('enrichInput1'), z.literal('enrichInput2'), expressionSchema]), required: false, displayOptions: {"show":{"combineBy":["combineByFields"]}}, defaults: {"combineBy":"combineByFields"} }),
      outputDataFrom: resolveSchema({ parameters, schema: z.union([z.literal('both'), z.literal('input1'), z.literal('input2'), expressionSchema]), required: false, displayOptions: {"show":{"joinMode":["keepMatches","keepNonMatches"],"combineBy":["combineByFields"]}}, defaults: {"joinMode":"keepMatches","combineBy":"combineByFields"} }),
      numberInputs: resolveSchema({ parameters, schema: z.union([z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6), z.literal(7), z.literal(8), z.literal(9), z.literal(10)]), required: false, displayOptions: {"show":{"combineBy":["combineByPosition"]}}, defaults: {"combineBy":"combineByFields"} }),
    }).optional(),
  });
};