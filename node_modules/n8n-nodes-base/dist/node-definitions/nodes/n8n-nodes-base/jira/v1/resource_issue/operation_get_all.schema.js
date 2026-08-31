/**
 * Jira Software Node - Version 1 - Zod Schema
 * Discriminator: resource=issue, operation=getAll
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
      resource: z.literal('issue').default('issue'),
      operation: z.literal('getAll'),
      jiraVersion: z.union([z.literal('cloud'), z.literal('server'), z.literal('serverPat'), expressionSchema]).optional(),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      options: z.object({ expand: z.array(z.union([z.literal('changelog'), z.literal('editmeta'), z.literal('names'), z.literal('operations'), z.literal('renderedFields'), z.literal('schema'), z.literal('transitions'), z.literal('versionedRepresentations')])).optional(), fields: stringOrExpression.optional(), fieldsByKey: booleanOrExpression.optional(), jql: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};