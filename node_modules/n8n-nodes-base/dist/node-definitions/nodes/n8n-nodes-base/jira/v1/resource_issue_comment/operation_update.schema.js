/**
 * Jira Software Node - Version 1 - Zod Schema
 * Discriminator: resource=issueComment, operation=update
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
      resource: z.literal('issueComment'),
      operation: z.literal('update'),
      jiraVersion: z.union([z.literal('cloud'), z.literal('server'), z.literal('serverPat'), expressionSchema]).optional(),
      issueKey: stringOrExpression.optional(),
      commentId: stringOrExpression.optional(),
      jsonParameters: booleanOrExpression.optional(),
      comment: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
      commentJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      options: z.object({ expand: z.union([z.literal('renderedBody'), expressionSchema]).optional(), wikiMarkup: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};