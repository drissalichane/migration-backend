/**
 * AWS Cognito Node - Version 1 - Zod Schema
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
      operation: z.literal('create'),
      userPool: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      newUserName: stringOrExpression.optional(),
      additionalFields: z.object({ messageAction: z.union([z.literal('RESEND'), z.literal('SUPPRESS'), expressionSchema]).optional(), forceAliasCreation: booleanOrExpression.optional(), userAttributes: z.unknown().optional(), desiredDeliveryMediums: z.array(z.union([z.literal('SMS'), z.literal('EMAIL')])).optional(), temporaryPasswordOptions: stringOrExpression.optional() }).optional(),
      requestOptions: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};