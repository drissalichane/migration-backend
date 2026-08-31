/**
 * Stripe Node - Version 1 - Zod Schema
 * Discriminator: resource=source, operation=create
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
      resource: z.literal('source'),
      operation: z.literal('create'),
      customerId: stringOrExpression.optional(),
      type: z.union([z.literal('wechat'), expressionSchema]).optional(),
      amount: numberOrExpression.optional(),
      currency: stringOrExpression.optional(),
      additionalFields: z.object({ metadata: z.unknown().optional(), statement_descriptor: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};