/**
 * Airtable Node - Version 1 - Zod Validation Schemas
 *
 * These schemas validate node configuration at runtime.
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  // Parameters schema
  const parametersSchema = z.object({
    authentication: z.union([z.literal('airtableTokenApi'), z.literal('airtableOAuth2Api'), z.literal('airtableApi'), expressionSchema]).optional(),
    operation: z.union([z.literal('append'), z.literal('delete'), z.literal('list'), z.literal('read'), z.literal('update')]).optional(),
    application: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
    table: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
    addAllFields: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["append"]}}, defaults: {"operation":"read"} }),
    fields: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"addAllFields":[false],"operation":["append","update"],"updateAllFields":[false]}}, defaults: {"addAllFields":true,"operation":"read","updateAllFields":true} }),
    id: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["delete","read","update"]}}, defaults: {"operation":"read"} }),
    returnAll: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["list"]}}, defaults: {"operation":"read"} }),
    limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"operation":["list"],"returnAll":[false]}}, defaults: {"operation":"read","returnAll":true} }),
    downloadAttachments: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["list"]}}, defaults: {"operation":"read"} }),
    downloadFieldNames: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["list"],"downloadAttachments":[true]}}, defaults: {"operation":"read","downloadAttachments":false} }),
    additionalOptions: resolveSchema({ parameters, schema: z.object({ fields: stringOrExpression.optional(), filterByFormula: stringOrExpression.optional(), sort: z.unknown().optional(), view: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["list"]}}, defaults: {"operation":"read"} }),
    updateAllFields: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["update"]}}, defaults: {"operation":"read"} }),
    options: resolveSchema({ parameters, schema: z.object({ bulkSize: numberOrExpression.optional(), ignoreFields: stringOrExpression.optional(), typecast: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["append","delete","update"]}}, defaults: {"operation":"read"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};