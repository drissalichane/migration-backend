/**
 * Spotify Node - Version 1 - Zod Schema
 * Discriminator: resource=playlist, operation=add
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
      resource: z.literal('playlist'),
      operation: z.literal('add'),
      id: stringOrExpression.optional(),
      trackID: stringOrExpression.optional(),
      additionalFields: z.object({ position: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};