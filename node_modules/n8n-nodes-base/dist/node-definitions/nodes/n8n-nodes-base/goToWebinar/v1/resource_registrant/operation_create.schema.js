/**
 * GoToWebinar Node - Version 1 - Zod Schema
 * Discriminator: resource=registrant, operation=create
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
      resource: z.literal('registrant'),
      operation: z.literal('create'),
      webinarKey: stringOrExpression.optional(),
      firstName: stringOrExpression.optional(),
      lastName: stringOrExpression.optional(),
      email: stringOrExpression.optional(),
      additionalFields: z.object({ fullAddress: z.unknown().optional(), industry: stringOrExpression.optional(), jobTitle: stringOrExpression.optional(), multiChoiceResponses: z.unknown().optional(), numberOfEmployees: stringOrExpression.optional(), organization: stringOrExpression.optional(), phone: stringOrExpression.optional(), purchasingRole: stringOrExpression.optional(), purchasingTimeFrame: stringOrExpression.optional(), questionsAndComments: stringOrExpression.optional(), resendConfirmation: booleanOrExpression.optional(), simpleResponses: z.unknown().optional(), source: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};