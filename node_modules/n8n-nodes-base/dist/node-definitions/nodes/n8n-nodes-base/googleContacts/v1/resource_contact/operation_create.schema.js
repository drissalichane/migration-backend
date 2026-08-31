/**
 * Google Contacts Node - Version 1 - Zod Schema
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
      resource: z.literal('contact').default('contact'),
      operation: z.literal('create').default('create'),
      familyName: stringOrExpression.optional(),
      givenName: stringOrExpression.optional(),
      additionalFields: z.object({ addressesUi: z.unknown().optional(), birthday: stringOrExpression.optional(), companyUi: z.unknown().optional(), customFieldsUi: z.unknown().optional(), emailsUi: z.unknown().optional(), eventsUi: z.unknown().optional(), fileAs: stringOrExpression.optional(), group: z.array(z.string()).optional(), honorificPrefix: stringOrExpression.optional(), honorificSuffix: stringOrExpression.optional(), middleName: stringOrExpression.optional(), biographies: stringOrExpression.optional(), phoneUi: z.unknown().optional(), relationsUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};