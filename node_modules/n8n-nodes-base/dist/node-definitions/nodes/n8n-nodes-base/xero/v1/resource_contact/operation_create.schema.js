/**
 * Xero Node - Version 1 - Zod Schema
 * Discriminator: resource=contact, operation=create
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
      resource: z.literal('contact'),
      operation: z.literal('create').default('create'),
      organizationId: stringOrExpression.optional(),
      name: stringOrExpression.optional(),
      additionalFields: z.object({ accountNumber: stringOrExpression.optional(), addressesUi: z.unknown().optional(), bankAccountDetails: stringOrExpression.optional(), contactNumber: stringOrExpression.optional(), contactStatus: z.union([z.literal('ACTIVE'), z.literal('ARCHIVED'), z.literal('GDPRREQUEST'), expressionSchema]).optional(), defaultCurrency: stringOrExpression.optional(), emailAddress: stringOrExpression.optional(), firstName: stringOrExpression.optional(), lastName: stringOrExpression.optional(), phonesUi: z.unknown().optional(), purchasesDefaultAccountCode: stringOrExpression.optional(), salesDefaultAccountCode: stringOrExpression.optional(), skypeUserName: stringOrExpression.optional(), taxNumber: stringOrExpression.optional(), xeroNetworkKey: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};