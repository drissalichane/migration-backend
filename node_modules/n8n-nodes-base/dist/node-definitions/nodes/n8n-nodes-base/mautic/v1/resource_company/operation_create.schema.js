/**
 * Mautic Node - Version 1 - Zod Schema
 * Discriminator: resource=company, operation=create
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
      resource: z.literal('company'),
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('credentials'), z.literal('oAuth2'), expressionSchema]).optional(),
      name: stringOrExpression.optional(),
      simple: booleanOrExpression.optional(),
      additionalFields: z.object({ addressUi: z.unknown().optional(), annualRevenue: numberOrExpression.optional(), companyEmail: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), description: stringOrExpression.optional(), fax: stringOrExpression.optional(), industry: stringOrExpression.optional(), isPublished: booleanOrExpression.optional(), numberOfEmpoyees: numberOrExpression.optional(), overwriteWithBlank: booleanOrExpression.optional(), phone: stringOrExpression.optional(), website: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};