/**
 * Switch Node - Version 1 - Zod Schema
 * Discriminator: mode=rules
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
      mode: z.literal('rules').default('rules'),
      dataType: z.union([z.literal('boolean'), z.literal('dateTime'), z.literal('number'), z.literal('string'), expressionSchema]).optional(),
      value1: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"dataType":["boolean","dateTime","number","string"]}}, defaults: {"dataType":"number"} }),
      rules: resolveSchema({ parameters, schema: z.object({ rules: z.array(z.object({ operation: z.union([z.literal('equal'), z.literal('notEqual'), expressionSchema]).optional(), value2: booleanOrExpression.optional(), output: numberOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"dataType":["boolean","dateTime","number","string"]}}, defaults: {"dataType":"number"} }),
      fallbackOutput: z.union([z.literal(-1), z.literal(0), z.literal(1), z.literal(2), z.literal(3), expressionSchema]).optional(),
    }).optional(),
  });
};