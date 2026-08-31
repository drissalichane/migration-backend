/**
 * Salesmate Node - Version 1 - Zod Schema
 * Discriminator: resource=deal, operation=getAll
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
      resource: z.literal('deal'),
      operation: z.literal('getAll'),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      jsonParameters: booleanOrExpression.optional(),
      options: z.object({ fields: stringOrExpression.optional(), sortBy: stringOrExpression.optional(), sortOrder: z.union([z.literal('asc'), z.literal('desc'), expressionSchema]).optional() }).optional(),
      filtersJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      filters: resolveSchema({ parameters, schema: z.object({ filtersUi: z.object({ operator: z.union([z.literal('AND'), z.literal('OR'), expressionSchema]).optional(), conditions: z.unknown().optional() }).optional() }), required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
    }).optional(),
  });
};