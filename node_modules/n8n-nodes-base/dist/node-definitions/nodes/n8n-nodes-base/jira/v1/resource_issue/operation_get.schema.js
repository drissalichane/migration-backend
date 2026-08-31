/**
 * Jira Software Node - Version 1 - Zod Schema
 * Discriminator: resource=issue, operation=get
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
      resource: z.literal('issue').default('issue'),
      operation: z.literal('get'),
      jiraVersion: z.union([z.literal('cloud'), z.literal('server'), z.literal('serverPat'), expressionSchema]).optional(),
      issueKey: stringOrExpression.optional(),
      simplifyOutput: booleanOrExpression.optional(),
      additionalFields: z.object({ expand: stringOrExpression.optional(), fields: stringOrExpression.optional(), fieldsByKey: booleanOrExpression.optional(), properties: stringOrExpression.optional(), updateHistory: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};