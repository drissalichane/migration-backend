/**
 * PostHog Node - Version 1 - Zod Schema
 * Discriminator: resource=alias, operation=create
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
      resource: z.literal('alias'),
      operation: z.literal('create').default('create'),
      alias: stringOrExpression.optional(),
      distinctId: stringOrExpression.optional(),
      additionalFields: z.object({ contextUi: z.unknown().optional(), timestamp: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};