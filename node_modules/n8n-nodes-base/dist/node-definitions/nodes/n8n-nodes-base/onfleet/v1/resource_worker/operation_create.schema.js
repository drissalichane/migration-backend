/**
 * Onfleet Node - Version 1 - Zod Schema
 * Discriminator: resource=worker, operation=create
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
      resource: z.literal('worker'),
      operation: z.literal('create'),
      name: stringOrExpression.optional(),
      phone: stringOrExpression.optional(),
      teams: z.array(z.string()).optional(),
      additionalFields: z.object({ capacity: numberOrExpression.optional(), displayName: stringOrExpression.optional(), vehicle: z.unknown().optional() }).optional(),
    }).optional(),
  });
};