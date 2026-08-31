/**
 * Google Cloud Storage Node - Version 1 - Zod Schema
 * Discriminator: resource=object, operation=delete
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
      resource: z.literal('object'),
      operation: z.literal('delete'),
      bucketName: stringOrExpression.optional(),
      objectName: stringOrExpression.optional(),
      getParameters: z.object({ generation: numberOrExpression.optional(), ifGenerationMatch: numberOrExpression.optional(), ifGenerationNotMatch: numberOrExpression.optional(), ifMetagenerationMatch: numberOrExpression.optional(), ifMetagenerationNotMatch: numberOrExpression.optional() }).optional(),
      requestOptions: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};