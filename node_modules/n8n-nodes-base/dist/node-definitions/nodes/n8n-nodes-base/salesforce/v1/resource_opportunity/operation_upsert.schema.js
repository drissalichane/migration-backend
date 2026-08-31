/**
 * Salesforce Node - Version 1 - Zod Schema
 * Discriminator: resource=opportunity, operation=upsert
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
      resource: z.literal('opportunity'),
      operation: z.literal('upsert'),
      authentication: z.union([z.literal('oAuth2'), z.literal('jwt'), expressionSchema]).optional(),
      externalId: stringOrExpression.optional(),
      externalIdValue: stringOrExpression.optional(),
      name: stringOrExpression.optional(),
      closeDate: stringOrExpression.optional(),
      stageName: stringOrExpression.optional(),
      additionalFields: z.object({ accountId: stringOrExpression.optional(), amount: numberOrExpression.optional(), campaignId: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), description: stringOrExpression.optional(), forecastCategoryName: stringOrExpression.optional(), leadSource: stringOrExpression.optional(), nextStep: stringOrExpression.optional(), owner: stringOrExpression.optional(), phone: stringOrExpression.optional(), pricebook2Id: stringOrExpression.optional(), probability: numberOrExpression.optional(), type: z.union([z.literal('Business'), z.literal('New Business'), expressionSchema]).optional() }).optional(),
    }).optional(),
  });
};