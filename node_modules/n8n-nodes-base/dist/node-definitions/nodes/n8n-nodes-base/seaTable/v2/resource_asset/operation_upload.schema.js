/**
 * SeaTable Node - Version 2 - Zod Schema
 * Discriminator: resource=asset, operation=upload
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
      resource: z.literal('asset'),
      operation: z.literal('upload'),
      tableName: stringOrExpression.optional(),
      uploadColumn: stringOrExpression.optional(),
      rowId: stringOrExpression.optional(),
      dataPropertyName: stringOrExpression.optional(),
      options: z.object({ replace: booleanOrExpression.optional(), append: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};