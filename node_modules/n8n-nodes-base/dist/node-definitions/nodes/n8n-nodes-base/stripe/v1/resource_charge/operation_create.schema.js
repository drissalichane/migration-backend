/**
 * Stripe Node - Version 1 - Zod Schema
 * Discriminator: resource=charge, operation=create
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
      resource: z.literal('charge'),
      operation: z.literal('create'),
      customerId: stringOrExpression.optional(),
      amount: numberOrExpression.optional(),
      currency: stringOrExpression.optional(),
      source: stringOrExpression.optional(),
      additionalFields: z.object({ description: stringOrExpression.optional(), metadata: z.unknown().optional(), receipt_email: stringOrExpression.optional(), shipping: z.unknown().optional() }).optional(),
    }).optional(),
  });
};