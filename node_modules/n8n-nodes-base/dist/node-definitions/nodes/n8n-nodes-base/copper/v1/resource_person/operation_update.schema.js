/**
 * Copper Node - Version 1 - Zod Schema
 * Discriminator: resource=person, operation=update
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
      resource: z.literal('person'),
      operation: z.literal('update'),
      personId: stringOrExpression.optional(),
      updateFields: z.object({ address: z.unknown().optional(), details: stringOrExpression.optional(), email_domain: stringOrExpression.optional(), emails: z.unknown().optional(), name: stringOrExpression.optional(), phone_numbers: z.unknown().optional() }).optional(),
    }).optional(),
  });
};