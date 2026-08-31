/**
 * ClickUp Node - Version 1 - Zod Schema
 * Discriminator: resource=task, operation=getAll
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
      resource: z.literal('task').default('task'),
      operation: z.literal('getAll'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      team: stringOrExpression.optional(),
      space: stringOrExpression.optional(),
      folderless: booleanOrExpression.optional(),
      folder: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderless":[false]}}, defaults: {"folderless":false} }),
      list: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderless":[true,false]}}, defaults: {"folderless":false} }),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":true} }),
      filters: z.object({ archived: booleanOrExpression.optional(), assignees: z.array(z.string()).optional(), customFieldsUi: z.unknown().optional(), dateCreatedGt: stringOrExpression.optional(), dateCreatedLt: stringOrExpression.optional(), dateUpdatedGt: stringOrExpression.optional(), dateUpdatedLt: stringOrExpression.optional(), dueDateGt: stringOrExpression.optional(), dueDateLt: stringOrExpression.optional(), includeClosed: booleanOrExpression.optional(), orderBy: z.union([z.literal('id'), z.literal('created'), z.literal('updated'), z.literal('dueDate'), expressionSchema]).optional(), statuses: z.array(z.string()).optional(), subtasks: booleanOrExpression.optional(), tags: z.array(z.string()).optional() }).optional(),
    }).optional(),
  });
};