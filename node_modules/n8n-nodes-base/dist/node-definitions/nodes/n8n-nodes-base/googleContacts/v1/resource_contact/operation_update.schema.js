/**
 * Google Contacts Node - Version 1 - Zod Schema
 * Discriminator: resource=contact, operation=update
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
      operation: z.literal('update'),
      contactId: stringOrExpression.optional(),
      fields: z.array(z.union([z.literal('*'), z.literal('addresses'), z.literal('biographies'), z.literal('birthdays'), z.literal('coverPhotos'), z.literal('emailAddresses'), z.literal('events'), z.literal('genders'), z.literal('imClients'), z.literal('interests'), z.literal('locales'), z.literal('memberships'), z.literal('metadata'), z.literal('names'), z.literal('nicknames'), z.literal('occupations'), z.literal('organizations'), z.literal('phoneNumbers'), z.literal('photos'), z.literal('relations'), z.literal('residences'), z.literal('sipAddresses'), z.literal('skills'), z.literal('urls'), z.literal('userDefined')])).optional(),
      updateFields: z.object({ etag: stringOrExpression.optional(), familyName: stringOrExpression.optional(), givenName: stringOrExpression.optional(), addressesUi: z.unknown().optional(), birthday: stringOrExpression.optional(), companyUi: z.unknown().optional(), customFieldsUi: z.unknown().optional(), emailsUi: z.unknown().optional(), eventsUi: z.unknown().optional(), fileAs: stringOrExpression.optional(), group: z.array(z.string()).optional(), honorificPrefix: stringOrExpression.optional(), honorificSuffix: stringOrExpression.optional(), middleName: stringOrExpression.optional(), biographies: stringOrExpression.optional(), phoneUi: z.unknown().optional(), relationsUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};