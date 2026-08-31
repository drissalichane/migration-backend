/**
 * Iterable Node - Version 1 - Zod Schema
 * Discriminator: resource=user, operation=upsert
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
      resource: z.literal('user').default('user'),
      operation: z.literal('upsert'),
      identifier: z.union([z.literal('email'), z.literal('userId'), expressionSchema]).optional(),
      value: stringOrExpression.optional(),
      preferUserId: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"identifier":["userId"]}}, defaults: {"identifier":""} }),
      additionalFields: z.object({ dataFieldsUi: z.unknown().optional(), mergeNestedObjects: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};