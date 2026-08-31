/**
 * SyncroMSP Node - Version 1 - Zod Schema
 * Discriminator: resource=customer, operation=update
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
      resource: z.literal('customer'),
      operation: z.literal('update'),
      customerId: stringOrExpression.optional(),
      updateFields: z.object({ address: z.unknown().optional(), businessName: stringOrExpression.optional(), email: stringOrExpression.optional(), firstName: stringOrExpression.optional(), getSms: booleanOrExpression.optional(), invoiceCcEmails: stringOrExpression.optional(), lastName: stringOrExpression.optional(), noEmail: booleanOrExpression.optional(), notes: stringOrExpression.optional(), notificationEmail: stringOrExpression.optional(), phone: stringOrExpression.optional(), referredBy: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};