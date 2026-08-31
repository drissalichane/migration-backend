/**
 * Grist Node - Version 1 - Zod Validation Schemas
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
    operation: z.union([z.literal('create'), z.literal('delete'), z.literal('getAll'), z.literal('update')]).optional(),
    docId: stringOrExpression.optional(),
    tableId: stringOrExpression.optional(),
    rowId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["delete","update"]}}, defaults: {"operation":"getAll"} }),
    returnAll: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["getAll"]}}, defaults: {"operation":"getAll"} }),
    limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"operation":["getAll"],"returnAll":[false]}}, defaults: {"operation":"getAll","returnAll":false} }),
    additionalOptions: resolveSchema({ parameters, schema: z.object({ filter: z.unknown().optional(), sort: z.unknown().optional() }), required: false, displayOptions: {"show":{"operation":["getAll"]}}, defaults: {"operation":"getAll"} }),
    dataToSend: resolveSchema({ parameters, schema: z.union([z.literal('autoMapInputs'), z.literal('defineInNode'), expressionSchema]), required: false, displayOptions: {"show":{"operation":["create","update"]}}, defaults: {"operation":"getAll"} }),
    inputsToIgnore: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["create","update"],"dataToSend":["autoMapInputs"]}}, defaults: {"operation":"getAll","dataToSend":"defineInNode"} }),
    fieldsToSend: resolveSchema({ parameters, schema: z.object({ properties: z.array(z.object({ fieldId: stringOrExpression.optional(), fieldValue: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"operation":["create","update"],"dataToSend":["defineInNode"]}}, defaults: {"operation":"getAll","dataToSend":"defineInNode"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};