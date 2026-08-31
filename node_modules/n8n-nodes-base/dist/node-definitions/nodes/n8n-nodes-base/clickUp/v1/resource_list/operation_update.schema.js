/**
 * ClickUp Node - Version 1 - Zod Schema
 * Discriminator: resource=list, operation=update
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
      resource: z.literal('list'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      team: stringOrExpression.optional(),
      space: stringOrExpression.optional(),
      folderless: booleanOrExpression.optional(),
      folder: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderless":[false]}}, defaults: {"folderless":false} }),
      list: stringOrExpression.optional(),
      updateFields: z.object({ assignee: stringOrExpression.optional(), content: stringOrExpression.optional(), dueDate: stringOrExpression.optional(), dueDateTime: booleanOrExpression.optional(), name: stringOrExpression.optional(), priority: numberOrExpression.optional(), unsetStatus: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};