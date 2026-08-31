/**
 * Azure Storage Node - Version 1 - Zod Schema
 * Discriminator: resource=container, operation=create
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
      resource: z.literal('container').default('container'),
      operation: z.literal('create'),
      authentication: z.union([z.literal('oAuth2'), z.literal('sharedKey'), expressionSchema]).optional(),
      containerCreate: stringOrExpression.optional(),
      options: z.object({ accessLevel: z.union([z.literal('blob'), z.literal('container'), z.literal(''), expressionSchema]).optional(), metadata: z.unknown().optional() }).optional(),
      requestOptions: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};