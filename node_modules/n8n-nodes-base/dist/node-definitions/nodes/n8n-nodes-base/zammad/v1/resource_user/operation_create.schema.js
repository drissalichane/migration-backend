/**
 * Zammad Node - Version 1 - Zod Schema
 * Discriminator: resource=user, operation=create
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
      resource: z.literal('user').default('user'),
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('basicAuth'), z.literal('tokenAuth'), expressionSchema]).optional(),
      firstname: stringOrExpression.optional(),
      lastname: stringOrExpression.optional(),
      additionalFields: z.object({ active: booleanOrExpression.optional(), addressUi: z.unknown().optional(), customFieldsUi: z.unknown().optional(), department: stringOrExpression.optional(), email: stringOrExpression.optional(), fax: stringOrExpression.optional(), note: stringOrExpression.optional(), organization: stringOrExpression.optional(), phone: stringOrExpression.optional(), mobile: stringOrExpression.optional(), verified: booleanOrExpression.optional(), vip: booleanOrExpression.optional(), web: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};