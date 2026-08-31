/**
 * Microsoft Outlook Node - Version 1 - Zod Schema
 * Discriminator: resource=folder, operation=create
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
      resource: z.literal('folder'),
      operation: z.literal('create').default('create'),
      folderType: z.union([z.literal('folder'), z.literal('searchFolder'), expressionSchema]).optional(),
      displayName: stringOrExpression.optional(),
      includeNestedFolders: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"folderType":["searchFolder"]}}, defaults: {"folderType":"folder"} }),
      sourceFolderIds: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderType":["searchFolder"]}}, defaults: {"folderType":"folder"} }),
      filterQuery: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"folderType":["searchFolder"]}}, defaults: {"folderType":"folder"} }),
    }).optional(),
  });
};