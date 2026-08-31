/**
 * n8n Form Trigger Node - Version 2.3 - Zod Validation Schemas
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
    authentication: z.union([z.literal('basicAuth'), z.literal('none'), expressionSchema]).optional(),
    formTitle: stringOrExpression.optional(),
    formDescription: stringOrExpression.optional(),
    formFields: z.object({ values: z.array(z.object({ fieldName: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), fieldType: z.union([z.literal('checkbox'), z.literal('html'), z.literal('date'), z.literal('dropdown'), z.literal('email'), z.literal('file'), z.literal('hiddenField'), z.literal('number'), z.literal('password'), z.literal('radio'), z.literal('text'), z.literal('textarea'), expressionSchema]).optional(), elementName: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), placeholder: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), fieldValue: stringOrExpression.optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), multiselect: booleanOrExpression.optional(), limitSelection: z.union([z.literal('exact'), z.literal('range'), z.literal('unlimited'), expressionSchema]).optional(), numberOfSelections: numberOrExpression.optional(), minSelections: numberOrExpression.optional(), maxSelections: numberOrExpression.optional(), html: z.string().optional(), multipleFiles: booleanOrExpression.optional(), acceptFileTypes: stringOrExpression.optional(), requiredField: booleanOrExpression.optional() })).optional() }).optional(),
    responseMode: z.union([z.literal('onReceived'), z.literal('lastNode'), expressionSchema]).optional(),
    options: z.object({ appendAttribution: booleanOrExpression.optional(), ipWhitelist: stringOrExpression.optional(), buttonLabel: stringOrExpression.optional(), path: stringOrExpression.optional(), respondWithOptions: z.unknown().optional(), ignoreBots: booleanOrExpression.optional(), useWorkflowTimezone: booleanOrExpression.optional(), useWorkflowTimezone: booleanOrExpression.optional(), customCss: stringOrExpression.optional() }).optional(),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};