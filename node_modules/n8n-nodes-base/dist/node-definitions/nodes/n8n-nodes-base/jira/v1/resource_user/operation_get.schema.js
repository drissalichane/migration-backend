/**
 * Jira Software Node - Version 1 - Zod Schema
 * Discriminator: resource=user, operation=get
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
      operation: z.literal('get'),
      jiraVersion: z.union([z.literal('cloud'), z.literal('server'), z.literal('serverPat'), expressionSchema]).optional(),
      accountId: stringOrExpression.optional(),
      additionalFields: z.object({ expand: z.array(z.union([z.literal('groups'), z.literal('applicationRoles')])).optional() }).optional(),
    }).optional(),
  });
};