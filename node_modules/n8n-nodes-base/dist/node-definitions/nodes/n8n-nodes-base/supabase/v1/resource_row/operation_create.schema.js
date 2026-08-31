/**
 * Supabase Node - Version 1 - Zod Schema
 * Discriminator: resource=row, operation=create
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
      resource: z.literal('row').default('row'),
      operation: z.literal('create').default('create'),
      useCustomSchema: z.boolean().optional(),
      schema: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"useCustomSchema":[true]}}, defaults: {"useCustomSchema":false} }),
      tableId: stringOrExpression.optional(),
      dataToSend: z.union([z.literal('autoMapInputData'), z.literal('defineBelow'), expressionSchema]).optional(),
      inputsToIgnore: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"dataToSend":["autoMapInputData"]}}, defaults: {"dataToSend":"defineBelow"} }),
      fieldsUi: resolveSchema({ parameters, schema: z.object({ fieldValues: z.array(z.object({ fieldId: stringOrExpression.optional(), fieldValue: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"dataToSend":["defineBelow"]}}, defaults: {"dataToSend":"defineBelow"} }),
    }).optional(),
  });
};