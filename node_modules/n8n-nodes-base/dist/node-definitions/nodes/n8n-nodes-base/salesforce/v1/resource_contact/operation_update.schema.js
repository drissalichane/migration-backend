/**
 * Salesforce Node - Version 1 - Zod Schema
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
      resource: z.literal('contact'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('oAuth2'), z.literal('jwt'), expressionSchema]).optional(),
      contactId: stringOrExpression.optional(),
      updateFields: z.object({ acconuntId: stringOrExpression.optional(), assistantName: stringOrExpression.optional(), 'Assistant Phone': stringOrExpression.optional(), birthdate: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), department: stringOrExpression.optional(), description: stringOrExpression.optional(), email: stringOrExpression.optional(), emailBouncedDate: stringOrExpression.optional(), emailBouncedReason: stringOrExpression.optional(), fax: stringOrExpression.optional(), firstName: stringOrExpression.optional(), homePhone: stringOrExpression.optional(), jigsaw: stringOrExpression.optional(), lastName: stringOrExpression.optional(), leadSource: stringOrExpression.optional(), mailingCity: stringOrExpression.optional(), mailingCountry: stringOrExpression.optional(), mailingState: stringOrExpression.optional(), mailingStreet: stringOrExpression.optional(), mailingPostalCode: stringOrExpression.optional(), mobilePhone: stringOrExpression.optional(), otherCity: stringOrExpression.optional(), otherCountry: stringOrExpression.optional(), otherPhone: stringOrExpression.optional(), otherPostalCode: stringOrExpression.optional(), otherState: stringOrExpression.optional(), otherStreet: stringOrExpression.optional(), owner: stringOrExpression.optional(), phone: stringOrExpression.optional(), recordTypeId: stringOrExpression.optional(), salutation: stringOrExpression.optional(), title: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};