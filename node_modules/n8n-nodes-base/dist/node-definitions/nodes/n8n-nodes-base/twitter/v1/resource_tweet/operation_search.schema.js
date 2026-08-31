/**
 * X (Formerly Twitter) Node - Version 1 - Zod Schema
 * Discriminator: resource=tweet, operation=search
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
      resource: z.literal('tweet').default('tweet'),
      operation: z.literal('search'),
      searchText: stringOrExpression.optional(),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      additionalFields: z.object({ includeEntities: booleanOrExpression.optional(), lang: stringOrExpression.optional(), locationFieldsUi: z.unknown().optional(), resultType: z.union([z.literal('mixed'), z.literal('recent'), z.literal('popular'), expressionSchema]).optional(), tweetMode: z.union([z.literal('compat'), z.literal('extended'), expressionSchema]).optional(), until: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};