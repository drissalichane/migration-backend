/**
 * Google Sheets Node - Version 4.4 - Zod Schema
 * Discriminator: resource=sheet, operation=read
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
      resource: z.literal('sheet').default('sheet'),
      operation: z.literal('read').default('read'),
      authentication: z.union([z.literal('serviceAccount'), z.literal('oAuth2'), expressionSchema]).optional(),
      documentId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      sheetName: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('url'), z.literal('id'), z.literal('name')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      filtersUI: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ lookupColumn: stringOrExpression.optional(), lookupValue: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"hide":{"sheetName":[""]}}, defaults: {"sheetName":{"mode":"list","value":""}} }),
      combineFilters: resolveSchema({ parameters, schema: z.union([z.literal('AND'), z.literal('OR'), expressionSchema]), required: false, displayOptions: {"hide":{"sheetName":[""]}}, defaults: {"sheetName":{"mode":"list","value":""}} }),
      options: resolveSchema({ parameters, schema: z.object({ dataLocationOnSheet: z.unknown().optional(), outputFormatting: z.unknown().optional(), returnFirstMatch: booleanOrExpression.optional(), returnAllMatches: z.union([z.literal('returnFirstMatch'), z.literal('returnAllMatches'), expressionSchema]).optional() }), required: false, displayOptions: {"hide":{"sheetName":[""]}}, defaults: {"sheetName":{"mode":"list","value":""}} }),
    }).optional(),
  });
};