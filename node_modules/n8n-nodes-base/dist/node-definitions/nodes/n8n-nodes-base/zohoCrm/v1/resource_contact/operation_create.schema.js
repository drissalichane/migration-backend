/**
 * Zoho CRM Node - Version 1 - Zod Schema
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
      lastName: stringOrExpression.optional(),
      additionalFields: z.object({ Assistant: stringOrExpression.optional(), customFields: z.unknown().optional(), Date_of_Birth: stringOrExpression.optional(), Department: stringOrExpression.optional(), Description: stringOrExpression.optional(), Email: stringOrExpression.optional(), Secondary_Email: stringOrExpression.optional(), Fax: stringOrExpression.optional(), First_Name: stringOrExpression.optional(), Full_Name: stringOrExpression.optional(), Mailing_Address: z.unknown().optional(), Mobile: stringOrExpression.optional(), Other_Address: z.unknown().optional(), Phone: stringOrExpression.optional(), Asst_Phone: stringOrExpression.optional(), Home_Phone: stringOrExpression.optional(), Other_Phone: stringOrExpression.optional(), Salutation: stringOrExpression.optional(), Skype_ID: stringOrExpression.optional(), Title: stringOrExpression.optional(), Twitter: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};