/**
 * SendGrid Node - Version 1 - Zod Schema
 * Discriminator: resource=contact, operation=upsert
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
      operation: z.literal('upsert'),
      email: stringOrExpression.optional(),
      additionalFields: z.object({ addressUi: z.unknown().optional(), alternateEmails: stringOrExpression.optional(), city: stringOrExpression.optional(), country: stringOrExpression.optional(), firstName: stringOrExpression.optional(), lastName: stringOrExpression.optional(), postalCode: stringOrExpression.optional(), stateProvinceRegion: stringOrExpression.optional(), listIdsUi: z.unknown().optional(), customFieldsUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};