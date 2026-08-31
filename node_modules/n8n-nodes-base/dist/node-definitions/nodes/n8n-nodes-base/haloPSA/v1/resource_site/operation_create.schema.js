/**
 * HaloPSA Node - Version 1 - Zod Schema
 * Discriminator: resource=site, operation=create
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('site'),
      operation: z.literal('create').default('create'),
      siteName: stringOrExpression.optional(),
      selectOption: booleanOrExpression.optional(),
      clientId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"selectOption":[true,false]}}, defaults: {"selectOption":false} }),
      additionalFields: z.object({ maincontact_name: stringOrExpression.optional(), notes: stringOrExpression.optional(), phonenumber: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};