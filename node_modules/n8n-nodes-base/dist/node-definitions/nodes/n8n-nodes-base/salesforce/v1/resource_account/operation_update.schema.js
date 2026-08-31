/**
 * Salesforce Node - Version 1 - Zod Schema
 * Discriminator: resource=account, operation=update
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
      resource: z.literal('account'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('oAuth2'), z.literal('jwt'), expressionSchema]).optional(),
      accountId: stringOrExpression.optional(),
      updateFields: z.object({ accountNumber: stringOrExpression.optional(), accountSource: stringOrExpression.optional(), annualRevenue: numberOrExpression.optional(), billingCity: stringOrExpression.optional(), billingCountry: stringOrExpression.optional(), billingPostalCode: stringOrExpression.optional(), billingState: stringOrExpression.optional(), billingStreet: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), description: stringOrExpression.optional(), fax: stringOrExpression.optional(), industry: stringOrExpression.optional(), jigsaw: stringOrExpression.optional(), name: stringOrExpression.optional(), numberOfEmployees: numberOrExpression.optional(), ownerId: stringOrExpression.optional(), parentId: stringOrExpression.optional(), phone: stringOrExpression.optional(), recordTypeId: stringOrExpression.optional(), sicDesc: stringOrExpression.optional(), shippingCity: stringOrExpression.optional(), shippingCountry: stringOrExpression.optional(), shippingPostalCode: stringOrExpression.optional(), shippingState: stringOrExpression.optional(), shippingStreet: stringOrExpression.optional(), type: stringOrExpression.optional(), website: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};