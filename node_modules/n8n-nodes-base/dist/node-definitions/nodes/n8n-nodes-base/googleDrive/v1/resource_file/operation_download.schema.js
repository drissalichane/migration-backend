/**
 * Google Drive Node - Version 1 - Zod Schema
 * Discriminator: resource=file, operation=download
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
      operation: z.literal('download'),
      authentication: z.union([z.literal('serviceAccount'), z.literal('oAuth2'), expressionSchema]).optional(),
      fileId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      binaryPropertyName: stringOrExpression.optional(),
      options: z.object({ googleFileConversion: z.unknown().optional(), fileName: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};