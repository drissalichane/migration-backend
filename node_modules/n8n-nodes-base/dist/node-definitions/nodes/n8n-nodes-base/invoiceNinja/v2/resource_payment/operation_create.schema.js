/**
 * Invoice Ninja Node - Version 2 - Zod Schema
 * Discriminator: resource=payment, operation=create
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
      resource: z.literal('payment'),
      operation: z.literal('create').default('create'),
      apiVersion: z.union([z.literal('v4'), z.literal('v5'), expressionSchema]).optional(),
      invoice: stringOrExpression.optional(),
      amount: numberOrExpression.optional(),
      additionalFields: resolveSchema({ parameters, schema: z.object({ paymentType: z.union([z.literal(5), z.literal(28), z.literal(8), z.literal(1), z.literal(2), z.literal(32), z.literal(17), z.literal(3), z.literal(16), z.literal(13), z.literal(4), z.literal(10), z.literal(9), z.literal(11), z.literal(31), z.literal(15), z.literal(24), z.literal(19), z.literal(20), z.literal(21), z.literal(7), z.literal(27), z.literal(12), z.literal(14), z.literal(30), z.literal(29), z.literal(22), z.literal(23), z.literal(25), z.literal(18), z.literal(26), z.literal(6), expressionSchema]).optional(), transferReference: stringOrExpression.optional(), privateNotes: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"apiVersion":["v4","v5"]}}, defaults: {"apiVersion":"v5"} }),
    }).optional(),
  });
};