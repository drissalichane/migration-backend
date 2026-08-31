/**
 * Google Drive Node - Version 2 - Zod Schema
 * Discriminator: resource=file, operation=list
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
      operation: z.literal('list'),
      authentication: z.union([z.literal('oAuth2'), z.literal('serviceAccount'), expressionSchema]).optional(),
      useQueryString: booleanOrExpression.optional(),
      queryString: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"useQueryString":[true]}}, defaults: {"useQueryString":false} }),
      limit: numberOrExpression.optional(),
      queryFilters: resolveSchema({ parameters, schema: z.object({ name: z.array(z.object({ operation: z.union([z.literal('contains'), z.literal('is'), z.literal('isNot')]).optional(), value: stringOrExpression.optional() })).optional(), mimeType: z.array(z.object({ mimeType: z.union([z.literal('application/vnd.google-apps.drive-sdk'), z.literal('application/vnd.google-apps.audio'), z.literal('custom'), z.literal('application/vnd.google-apps.script'), z.literal('application/vnd.google-apps.document'), z.literal('application/vnd.google-apps.drawing'), z.literal('application/vnd.google-apps.file'), z.literal('application/vnd.google-apps.folder'), z.literal('application/vnd.google-apps.form'), z.literal('application/vnd.google-apps.fusiontable'), z.literal('application/vnd.google-apps.map'), z.literal('application/vnd.google-apps.spreadsheet'), z.literal('application/vnd.google-apps.site'), z.literal('application/vnd.google-apps.presentation'), z.literal('application/vnd.google-apps.photo'), z.literal('application/vnd.google-apps.unknown'), z.literal('application/vnd.google-apps.video'), expressionSchema]).optional(), customMimeType: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"useQueryString":[false]}}, defaults: {"useQueryString":false} }),
    }).optional(),
  });
};