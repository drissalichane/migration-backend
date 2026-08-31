/**
 * Bubble Node - Version 1 - Zod Schema
 * Discriminator: resource=object, operation=getAll
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
      resource: z.literal('object').default('object'),
      operation: z.literal('getAll'),
      typeName: stringOrExpression.optional(),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      jsonParameters: booleanOrExpression.optional(),
      options: z.object({ filters: z.unknown().optional(), filtersJson: z.union([iDataObjectSchema, z.string()]).optional(), sort: z.unknown().optional() }).optional(),
    }).optional(),
  });
};