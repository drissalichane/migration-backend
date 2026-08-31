/**
 * Mattermost Node - Version 1 - Zod Schema
 * Discriminator: resource=user, operation=create
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
      resource: z.literal('user'),
      operation: z.literal('create').default('create'),
      username: stringOrExpression.optional(),
      authService: z.union([z.literal('email'), z.literal('gitlab'), z.literal('google'), z.literal('ldap'), z.literal('office365'), z.literal('saml'), expressionSchema]).optional(),
      authData: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"hide":{"authService":["email"]}}, defaults: {"authService":""} }),
      email: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"authService":["email"]}}, defaults: {"authService":""} }),
      password: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"authService":["email"]}}, defaults: {"authService":""} }),
      additionalFields: z.object({ first_name: stringOrExpression.optional(), last_name: stringOrExpression.optional(), locale: stringOrExpression.optional(), nickname: stringOrExpression.optional(), notificationUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};