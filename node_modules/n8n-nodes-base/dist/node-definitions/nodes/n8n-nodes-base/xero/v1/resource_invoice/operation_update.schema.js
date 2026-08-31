/**
 * Xero Node - Version 1 - Zod Schema
 * Discriminator: resource=invoice, operation=update
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
      resource: z.literal('invoice').default('invoice'),
      operation: z.literal('update'),
      organizationId: stringOrExpression.optional(),
      invoiceId: stringOrExpression.optional(),
      updateFields: z.object({ brandingThemeId: stringOrExpression.optional(), contactId: stringOrExpression.optional(), currency: stringOrExpression.optional(), currencyRate: stringOrExpression.optional(), date: stringOrExpression.optional(), dueDate: stringOrExpression.optional(), expectedPaymentDate: stringOrExpression.optional(), invoiceNumber: stringOrExpression.optional(), lineAmountType: z.union([z.literal('Exclusive'), z.literal('Inclusive'), z.literal('NoTax'), expressionSchema]).optional(), lineItemsUi: z.unknown().optional(), plannedPaymentDate: stringOrExpression.optional(), reference: stringOrExpression.optional(), sendToContact: booleanOrExpression.optional(), status: z.union([z.literal('DRAFT'), z.literal('SUBMITTED'), z.literal('AUTHORISED'), expressionSchema]).optional(), url: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};