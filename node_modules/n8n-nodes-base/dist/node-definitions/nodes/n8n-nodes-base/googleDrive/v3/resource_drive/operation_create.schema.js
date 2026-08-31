/**
 * Google Drive Node - Version 3 - Zod Schema
 * Discriminator: resource=drive, operation=create
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
      resource: z.literal('drive'),
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('oAuth2'), z.literal('serviceAccount'), expressionSchema]).optional(),
      name: stringOrExpression.optional(),
      options: z.object({ capabilities: z.unknown().optional(), colorRgb: stringOrExpression.optional(), hidden: booleanOrExpression.optional(), restrictions: z.unknown().optional() }).optional(),
    }).optional(),
  });
};