/**
 * Jira Software Node - Version 1 - Zod Schema
 * Discriminator: resource=user, operation=create
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
      resource: z.literal('user'),
      operation: z.literal('create').default('create'),
      jiraVersion: z.union([z.literal('cloud'), z.literal('server'), z.literal('serverPat'), expressionSchema]).optional(),
      username: stringOrExpression.optional(),
      emailAddress: stringOrExpression.optional(),
      displayName: stringOrExpression.optional(),
      additionalFields: z.object({ password: stringOrExpression.optional(), notification: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};