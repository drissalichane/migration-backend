/**
 * ClickUp Node - Version 1 - Zod Schema
 * Discriminator: resource=task, operation=create
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
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      team: stringOrExpression.optional(),
      space: stringOrExpression.optional(),
      folderless: booleanOrExpression.optional(),
      folder: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderless":[false]}}, defaults: {"folderless":false} }),
      list: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderless":[true,false]}}, defaults: {"folderless":false} }),
      name: stringOrExpression.optional(),
      additionalFields: z.object({ assignees: z.array(z.string()).optional(), customFieldsJson: z.union([iDataObjectSchema, z.string()]).optional(), content: stringOrExpression.optional(), dueDate: stringOrExpression.optional(), dueDateTime: booleanOrExpression.optional(), markdownContent: booleanOrExpression.optional(), notifyAll: booleanOrExpression.optional(), parentId: stringOrExpression.optional(), priority: numberOrExpression.optional(), startDate: stringOrExpression.optional(), startDateTime: booleanOrExpression.optional(), status: stringOrExpression.optional(), tags: z.array(z.string()).optional(), timeEstimate: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};