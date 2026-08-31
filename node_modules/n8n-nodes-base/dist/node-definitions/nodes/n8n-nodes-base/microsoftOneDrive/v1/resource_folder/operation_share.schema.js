/**
 * Microsoft OneDrive Node - Version 1 - Zod Schema
 * Discriminator: resource=folder, operation=share
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
      resource: z.literal('folder'),
      operation: z.literal('share'),
      folderId: stringOrExpression.optional(),
      type: z.union([z.literal('view'), z.literal('edit'), z.literal('embed'), expressionSchema]).optional(),
      scope: z.union([z.literal('anonymous'), z.literal('organization'), expressionSchema]).optional(),
    }).optional(),
  });
};