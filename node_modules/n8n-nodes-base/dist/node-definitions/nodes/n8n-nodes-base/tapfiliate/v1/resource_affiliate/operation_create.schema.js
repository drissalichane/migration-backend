/**
 * Tapfiliate Node - Version 1 - Zod Schema
 * Discriminator: resource=affiliate, operation=create
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
      resource: z.literal('affiliate').default('affiliate'),
      operation: z.literal('create').default('create'),
      email: stringOrExpression.optional(),
      firstname: stringOrExpression.optional(),
      lastname: stringOrExpression.optional(),
      additionalFields: z.object({ addressUi: z.unknown().optional(), companyName: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};