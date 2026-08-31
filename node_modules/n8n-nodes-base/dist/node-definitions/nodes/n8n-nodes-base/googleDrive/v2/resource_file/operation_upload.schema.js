/**
 * Google Drive Node - Version 2 - Zod Schema
 * Discriminator: resource=file, operation=upload
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
      resource: z.literal('file').default('file'),
      operation: z.literal('upload').default('upload'),
      authentication: z.union([z.literal('oAuth2'), z.literal('serviceAccount'), expressionSchema]).optional(),
      binaryData: booleanOrExpression.optional(),
      fileContent: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"binaryData":[false]}}, defaults: {"binaryData":false} }),
      binaryPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"binaryData":[true]}}, defaults: {"binaryData":false} }),
      name: stringOrExpression.optional(),
      resolveData: booleanOrExpression.optional(),
      parents: stringOrExpression.optional(),
      options: z.object({ appPropertiesUi: z.unknown().optional(), propertiesUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};