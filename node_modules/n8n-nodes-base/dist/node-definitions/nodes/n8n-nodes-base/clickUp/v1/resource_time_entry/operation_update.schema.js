/**
 * ClickUp Node - Version 1 - Zod Schema
 * Discriminator: resource=timeEntry, operation=update
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
      resource: z.literal('timeEntry'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      team: stringOrExpression.optional(),
      space: stringOrExpression.optional(),
      folderless: booleanOrExpression.optional(),
      folder: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderless":[false]}}, defaults: {"folderless":false} }),
      list: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderless":[true,false]}}, defaults: {"folderless":false} }),
      archived: booleanOrExpression.optional(),
      timeEntry: stringOrExpression.optional(),
      updateFields: z.object({ assignee: stringOrExpression.optional(), billable: booleanOrExpression.optional(), description: stringOrExpression.optional(), duration: numberOrExpression.optional(), start: stringOrExpression.optional(), tags: z.array(z.string()).optional(), task: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};