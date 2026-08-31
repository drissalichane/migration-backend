/**
 * Slack Node - Version 2.3 - Zod Schema
 * Discriminator: resource=user, operation=updateProfile
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
      resource: z.literal('user'),
      operation: z.literal('updateProfile'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      options: z.object({ customFieldUi: z.unknown().optional(), email: stringOrExpression.optional(), first_name: stringOrExpression.optional(), last_name: stringOrExpression.optional(), status: z.unknown().optional(), user: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};