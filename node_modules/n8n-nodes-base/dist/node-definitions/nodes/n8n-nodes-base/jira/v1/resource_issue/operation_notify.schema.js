/**
 * Jira Software Node - Version 1 - Zod Schema
 * Discriminator: resource=issue, operation=notify
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
      operation: z.literal('notify'),
      jiraVersion: z.union([z.literal('cloud'), z.literal('server'), z.literal('serverPat'), expressionSchema]).optional(),
      issueKey: stringOrExpression.optional(),
      jsonParameters: booleanOrExpression.optional(),
      additionalFields: z.object({ htmlBody: stringOrExpression.optional(), subject: stringOrExpression.optional(), textBody: stringOrExpression.optional() }).optional(),
      notificationRecipientsUi: resolveSchema({ parameters, schema: z.object({ notificationRecipientsValues: z.object({ reporter: booleanOrExpression.optional(), assignee: booleanOrExpression.optional(), watchers: booleanOrExpression.optional(), voters: booleanOrExpression.optional(), users: z.array(z.string()).optional(), groups: z.array(z.string()).optional() }).optional() }), required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
      notificationRecipientsJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      notificationRecipientsRestrictionsUi: resolveSchema({ parameters, schema: z.object({ notificationRecipientsRestrictionsValues: z.object({ users: z.array(z.string()).optional(), groups: z.array(z.string()).optional() }).optional() }), required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
      notificationRecipientsRestrictionsJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
    }).optional(),
  });
};