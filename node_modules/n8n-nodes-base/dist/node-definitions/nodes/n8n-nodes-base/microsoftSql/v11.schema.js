/**
 * Microsoft SQL Node - Version 1.1 - Zod Validation Schemas
 *
 * These schemas validate node configuration at runtime.
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  // Parameters schema
  const parametersSchema = z.object({
    operation: z.union([z.literal('executeQuery'), z.literal('insert'), z.literal('update'), z.literal('delete')]).optional(),
    query: resolveSchema({ parameters, schema: z.string(), required: false, displayOptions: {"show":{"operation":["executeQuery"]}}, defaults: {"operation":"insert"} }),
    options: resolveSchema({ parameters, schema: z.object({ queryReplacement: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["executeQuery"]}}, defaults: {"operation":"insert"} }),
    table: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["insert","update","delete"]}}, defaults: {"operation":"insert"} }),
    columns: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["insert","update"]}}, defaults: {"operation":"insert"} }),
    updateKey: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["update"]}}, defaults: {"operation":"insert"} }),
    deleteKey: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["delete"]}}, defaults: {"operation":"insert"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};