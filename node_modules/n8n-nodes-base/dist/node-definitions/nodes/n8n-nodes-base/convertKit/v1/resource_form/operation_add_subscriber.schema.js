/**
 * ConvertKit Node - Version 1 - Zod Schema
 * Discriminator: resource=form, operation=addSubscriber
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
      resource: z.literal('form').default('form'),
      operation: z.literal('addSubscriber'),
      id: stringOrExpression.optional(),
      email: stringOrExpression.optional(),
      additionalFields: z.object({ fieldsUi: z.unknown().optional(), firstName: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};