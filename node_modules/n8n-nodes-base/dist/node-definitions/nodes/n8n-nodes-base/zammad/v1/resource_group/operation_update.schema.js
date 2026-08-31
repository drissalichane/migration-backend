/**
 * Zammad Node - Version 1 - Zod Schema
 * Discriminator: resource=group, operation=update
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('group'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('basicAuth'), z.literal('tokenAuth'), expressionSchema]).optional(),
      id: stringOrExpression.optional(),
      updateFields: z.object({ active: booleanOrExpression.optional(), customFieldsUi: z.unknown().optional(), name: stringOrExpression.optional(), note: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};