/**
 * Microsoft Outlook Node - Version 2 - Zod Schema
 * Discriminator: resource=folder, operation=get
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
      resource: z.literal('folder'),
      operation: z.literal('get'),
      folderId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      options: z.object({ fields: z.array(z.union([z.literal('childFolderCount'), z.literal('displayName'), z.literal('isHidden'), z.literal('parentFolderId'), z.literal('totalItemCount'), z.literal('unreadItemCount')])).optional() }).optional(),
    }).optional(),
  });
};