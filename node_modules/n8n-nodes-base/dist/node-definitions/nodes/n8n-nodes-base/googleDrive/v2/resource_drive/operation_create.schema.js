/**
 * Google Drive Node - Version 2 - Zod Schema
 * Discriminator: resource=drive, operation=create
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
      resource: z.literal('drive'),
      operation: z.literal('create'),
      authentication: z.union([z.literal('oAuth2'), z.literal('serviceAccount'), expressionSchema]).optional(),
      options: resolveSchema({ parameters, schema: z.object({ emailMessage: stringOrExpression.optional(), enforceSingleParent: booleanOrExpression.optional(), fields: z.array(z.union([z.literal('*'), z.literal('explicitlyTrashed'), z.literal('exportLinks'), z.literal('hasThumbnail'), z.literal('iconLink'), z.literal('id'), z.literal('kind'), z.literal('mimeType'), z.literal('name'), z.literal('permissions'), z.literal('shared'), z.literal('spaces'), z.literal('starred'), z.literal('thumbnailLink'), z.literal('trashed'), z.literal('version'), z.literal('webViewLink')])).optional(), moveToNewOwnersRoot: booleanOrExpression.optional(), sendNotificationEmail: booleanOrExpression.optional(), supportsAllDrives: booleanOrExpression.optional(), transferOwnership: booleanOrExpression.optional(), useDomainAdminAccess: booleanOrExpression.optional(), name: stringOrExpression.optional(), parents: stringOrExpression.optional(), spaces: z.array(z.union([z.literal('*'), z.literal('appDataFolder'), z.literal('drive'), z.literal('photos')])).optional(), corpora: z.union([z.literal('user'), z.literal('domain'), z.literal('drive'), z.literal('allDrives'), expressionSchema]).optional(), driveId: stringOrExpression.optional(), capabilities: z.unknown().optional(), colorRgb: stringOrExpression.optional(), createdTime: stringOrExpression.optional(), hidden: booleanOrExpression.optional(), restrictions: z.unknown().optional() }), required: false, displayOptions: {"show":{"/operation":["copy","list","share","create"],"/resource":["file","folder"]}} }),
      name: stringOrExpression.optional(),
    }).optional(),
  });
};