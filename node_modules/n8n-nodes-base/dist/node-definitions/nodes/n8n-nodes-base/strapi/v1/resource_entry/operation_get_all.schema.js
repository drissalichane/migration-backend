/**
 * Strapi Node - Version 1 - Zod Schema
 * Discriminator: resource=entry, operation=getAll
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
      resource: z.literal('entry').default('entry'),
      operation: z.literal('getAll'),
      authentication: z.union([z.literal('password'), z.literal('token'), expressionSchema]).optional(),
      contentType: stringOrExpression.optional(),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      options: z.object({ publicationState: z.union([z.literal('live'), z.literal('preview'), expressionSchema]).optional(), sort: stringOrExpression.optional(), where: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};