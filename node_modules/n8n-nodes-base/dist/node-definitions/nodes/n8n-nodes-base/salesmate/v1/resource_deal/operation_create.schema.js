/**
 * Salesmate Node - Version 1 - Zod Schema
 * Discriminator: resource=deal, operation=create
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
      resource: z.literal('deal'),
      operation: z.literal('create').default('create'),
      title: stringOrExpression.optional(),
      owner: stringOrExpression.optional(),
      primaryContact: stringOrExpression.optional(),
      pipeline: z.union([z.literal('Sales'), expressionSchema]).optional(),
      status: z.union([z.literal('Open'), z.literal('Close'), z.literal('Lost'), expressionSchema]).optional(),
      stage: z.union([z.literal('New (Untouched)'), z.literal('Contacted'), z.literal('Qualified'), z.literal('In Negotiation'), z.literal('Proposal Presented'), expressionSchema]).optional(),
      currency: stringOrExpression.optional(),
      rawData: booleanOrExpression.optional(),
      additionalFields: z.object({ description: stringOrExpression.optional(), tags: stringOrExpression.optional(), primaryCompany: stringOrExpression.optional(), source: z.union([z.literal('Ads'), z.literal('Referrals'), z.literal('Website'), z.literal('Word of mouth'), expressionSchema]).optional(), estimatedCloseDate: stringOrExpression.optional(), dealValue: numberOrExpression.optional(), priority: z.union([z.literal('High'), z.literal('Medium'), z.literal('Low'), expressionSchema]).optional() }).optional(),
    }).optional(),
  });
};