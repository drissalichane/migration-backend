/**
 * Salesforce Node - Version 1 - Zod Schema
 * Discriminator: resource=account, operation=upsert
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
      operation: z.literal('upsert'),
      authentication: z.union([z.literal('oAuth2'), z.literal('jwt'), expressionSchema]).optional(),
      externalId: stringOrExpression.optional(),
      externalIdValue: stringOrExpression.optional(),
      name: stringOrExpression.optional(),
      additionalFields: z.object({ accountNumber: stringOrExpression.optional(), annualRevenue: numberOrExpression.optional(), accountSource: stringOrExpression.optional(), billingCity: stringOrExpression.optional(), billingCountry: stringOrExpression.optional(), billingPostalCode: stringOrExpression.optional(), billingState: stringOrExpression.optional(), billingStreet: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), description: stringOrExpression.optional(), fax: stringOrExpression.optional(), jigsaw: stringOrExpression.optional(), industry: stringOrExpression.optional(), numberOfEmployees: numberOrExpression.optional(), owner: stringOrExpression.optional(), parentId: stringOrExpression.optional(), phone: stringOrExpression.optional(), recordTypeId: stringOrExpression.optional(), sicDesc: stringOrExpression.optional(), type: stringOrExpression.optional(), shippingCity: stringOrExpression.optional(), shippingCountry: stringOrExpression.optional(), shippingPostalCode: stringOrExpression.optional(), shippingState: stringOrExpression.optional(), shippingStreet: stringOrExpression.optional(), website: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};