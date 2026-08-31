/**
 * NocoDB Node - Version 3 - Zod Schema
 * Discriminator: resource=row, operation=getAll
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
      operation: z.literal('getAll'),
      authentication: z.union([z.literal('nocoDbApiToken'), z.literal('nocoDb'), expressionSchema]).optional(),
      version: z.union([z.literal(1), z.literal(2), z.literal(3), expressionSchema]).optional(),
      workspaceId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"version":[3]}}, defaults: {"version":3} }),
      projectId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"version":[3,1,2]}}, defaults: {"version":3} }),
      table: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"version":[2,3,1]}}, defaults: {"version":3} }),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      downloadAttachments: booleanOrExpression.optional(),
      downloadFieldNames: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"downloadAttachments":[true]}}, defaults: {"downloadAttachments":false} }),
      options: z.object({ viewId: stringOrExpression.optional(), fields: stringOrExpression.optional(), sort: z.unknown().optional(), where: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};