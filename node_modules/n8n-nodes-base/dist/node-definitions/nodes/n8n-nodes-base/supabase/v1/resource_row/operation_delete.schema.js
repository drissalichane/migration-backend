/**
 * Supabase Node - Version 1 - Zod Schema
 * Discriminator: resource=row, operation=delete
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
      resource: z.literal('row').default('row'),
      operation: z.literal('delete'),
      useCustomSchema: z.boolean().optional(),
      schema: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"useCustomSchema":[true]}}, defaults: {"useCustomSchema":false} }),
      tableId: stringOrExpression.optional(),
      filterType: z.union([z.literal('manual'), z.literal('string'), expressionSchema]).optional(),
      matchType: resolveSchema({ parameters, schema: z.union([z.literal('anyFilter'), z.literal('allFilters'), expressionSchema]), required: false, displayOptions: {"show":{"filterType":["manual"]}}, defaults: {"filterType":"manual"} }),
      filters: resolveSchema({ parameters, schema: z.object({ conditions: z.array(z.object({ keyName: stringOrExpression.optional(), condition: z.union([z.literal('eq'), z.literal('fullText'), z.literal('gt'), z.literal('gte'), z.literal('ilike'), z.literal('is'), z.literal('lt'), z.literal('lte'), z.literal('like'), z.literal('neq'), expressionSchema]).optional(), searchFunction: z.union([z.literal('fts'), z.literal('plfts'), z.literal('phfts'), z.literal('wfts'), expressionSchema]).optional(), keyValue: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"filterType":["manual"]}}, defaults: {"filterType":"manual"} }),
      filterString: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"filterType":["string"]}}, defaults: {"filterType":"manual"} }),
    }).optional(),
  });
};