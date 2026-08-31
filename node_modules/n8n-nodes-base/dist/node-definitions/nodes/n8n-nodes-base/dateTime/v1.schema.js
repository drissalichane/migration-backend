/**
 * Date & Time Node - Version 1 - Zod Validation Schemas
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
    action: z.union([z.literal('calculate'), z.literal('format'), expressionSchema]).optional(),
    value: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"action":["format","calculate"]}}, defaults: {"action":"format"} }),
    dataPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"action":["format","calculate"]}}, defaults: {"action":"format"} }),
    custom: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"action":["format"]}}, defaults: {"action":"format"} }),
    toFormat: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"action":["format"],"custom":[true,false]}}, defaults: {"action":"format","custom":false} }),
    options: resolveSchema({ parameters, schema: z.object({ fromFormat: stringOrExpression.optional(), fromTimezone: stringOrExpression.optional(), toTimezone: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"action":["format","calculate"]}}, defaults: {"action":"format"} }),
    operation: resolveSchema({ parameters, schema: z.union([z.literal('add'), z.literal('subtract')]), required: false, displayOptions: {"show":{"action":["calculate"]}}, defaults: {"action":"format"} }),
    duration: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"action":["calculate"]}}, defaults: {"action":"format"} }),
    timeUnit: resolveSchema({ parameters, schema: z.union([z.literal('quarters'), z.literal('years'), z.literal('months'), z.literal('weeks'), z.literal('days'), z.literal('hours'), z.literal('minutes'), z.literal('seconds'), z.literal('milliseconds'), expressionSchema]), required: false, displayOptions: {"show":{"action":["calculate"]}}, defaults: {"action":"format"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};