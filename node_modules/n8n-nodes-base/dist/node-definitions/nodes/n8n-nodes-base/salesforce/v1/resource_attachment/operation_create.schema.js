/**
 * Salesforce Node - Version 1 - Zod Schema
 * Discriminator: resource=attachment, operation=create
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
      resource: z.literal('attachment'),
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('oAuth2'), z.literal('jwt'), expressionSchema]).optional(),
      parentId: stringOrExpression.optional(),
      name: stringOrExpression.optional(),
      binaryPropertyName: stringOrExpression.optional(),
      additionalFields: z.object({ description: stringOrExpression.optional(), isPrivate: booleanOrExpression.optional(), owner: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};