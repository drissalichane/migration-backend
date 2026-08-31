/**
 * Google Drive Node - Version 1 - Zod Schema
 * Discriminator: resource=file, operation=update
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
      resource: z.literal('file').default('file'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('serviceAccount'), z.literal('oAuth2'), expressionSchema]).optional(),
      fileId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      updateFields: z.object({ fileName: stringOrExpression.optional(), keepRevisionForever: booleanOrExpression.optional(), trashed: booleanOrExpression.optional(), ocrLanguage: stringOrExpression.optional(), parentId: stringOrExpression.optional(), useContentAsIndexableText: booleanOrExpression.optional() }).optional(),
      options: z.object({ fields: z.array(z.union([z.literal('*'), z.literal('explicitlyTrashed'), z.literal('exportLinks'), z.literal('hasThumbnail'), z.literal('iconLink'), z.literal('id'), z.literal('kind'), z.literal('mimeType'), z.literal('name'), z.literal('permissions'), z.literal('shared'), z.literal('spaces'), z.literal('starred'), z.literal('thumbnailLink'), z.literal('trashed'), z.literal('version'), z.literal('webViewLink')])).optional() }).optional(),
    }).optional(),
  });
};