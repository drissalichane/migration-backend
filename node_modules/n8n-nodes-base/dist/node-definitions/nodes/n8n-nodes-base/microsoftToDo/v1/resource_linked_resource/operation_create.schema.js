/**
 * Microsoft To Do Node - Version 1 - Zod Schema
 * Discriminator: resource=linkedResource, operation=create
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('linkedResource'),
      operation: z.literal('create'),
      taskListId: stringOrExpression.optional(),
      taskId: stringOrExpression.optional(),
      displayName: stringOrExpression.optional(),
      applicationName: stringOrExpression.optional(),
      additionalFields: z.object({ externalId: stringOrExpression.optional(), webUrl: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};