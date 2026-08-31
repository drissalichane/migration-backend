/**
 * Microsoft Outlook Node - Version 2 - Zod Schema
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
      operation: z.literal('create'),
      givenName: stringOrExpression.optional(),
      surname: stringOrExpression.optional(),
      additionalFields: z.object({ assistantName: stringOrExpression.optional(), birthday: stringOrExpression.optional(), businessAddress: z.unknown().optional(), businessHomePage: stringOrExpression.optional(), businessPhones: stringOrExpression.optional(), categories: stringOrExpression.optional(), children: stringOrExpression.optional(), companyName: stringOrExpression.optional(), department: stringOrExpression.optional(), displayName: stringOrExpression.optional(), emailAddresses: z.unknown().optional(), fileAs: stringOrExpression.optional(), homeAddress: z.unknown().optional(), homePhones: stringOrExpression.optional(), imAddresses: stringOrExpression.optional(), initials: stringOrExpression.optional(), jobTitle: stringOrExpression.optional(), manager: stringOrExpression.optional(), middleName: stringOrExpression.optional(), mobilePhone: stringOrExpression.optional(), givenName: stringOrExpression.optional(), nickName: stringOrExpression.optional(), officeLocation: stringOrExpression.optional(), otherAddress: z.unknown().optional(), personalNotes: stringOrExpression.optional(), profession: stringOrExpression.optional(), spouseName: stringOrExpression.optional(), surname: stringOrExpression.optional(), title: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};