/**
 * n8n Form Node - Version 2.4 - Zod Validation Schemas
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
    operation: z.union([z.literal('page'), z.literal('completion')]).optional(),
    defineForm: resolveSchema({ parameters, schema: z.union([z.literal('fields'), z.literal('json')]), required: false, displayOptions: {"show":{"operation":["page"]}}, defaults: {"operation":"page"} }),
    jsonOutput: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"defineForm":["json"],"operation":["page"]}}, defaults: {"defineForm":"fields","operation":"page"} }),
    formFields: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ fieldName: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), fieldType: z.union([z.literal('checkbox'), z.literal('html'), z.literal('date'), z.literal('dropdown'), z.literal('email'), z.literal('file'), z.literal('hiddenField'), z.literal('number'), z.literal('password'), z.literal('radio'), z.literal('text'), z.literal('textarea'), expressionSchema]).optional(), elementName: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), placeholder: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), fieldValue: stringOrExpression.optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), multiselect: booleanOrExpression.optional(), limitSelection: z.union([z.literal('exact'), z.literal('range'), z.literal('unlimited'), expressionSchema]).optional(), numberOfSelections: numberOrExpression.optional(), minSelections: numberOrExpression.optional(), maxSelections: numberOrExpression.optional(), html: z.string().optional(), multipleFiles: booleanOrExpression.optional(), acceptFileTypes: stringOrExpression.optional(), requiredField: booleanOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"defineForm":["fields"],"operation":["page"]}}, defaults: {"defineForm":"fields","operation":"page"} }),
    limitWaitTime: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["page","completion"]}}, defaults: {"operation":"page"} }),
    limitType: resolveSchema({ parameters, schema: z.union([z.literal('afterTimeInterval'), z.literal('atSpecifiedTime'), expressionSchema]), required: false, displayOptions: {"show":{"limitWaitTime":[true],"operation":["page","completion"]}}, defaults: {"limitWaitTime":false,"operation":"page"} }),
    resumeAmount: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"limitType":["afterTimeInterval"],"limitWaitTime":[true],"operation":["page","completion"]}}, defaults: {"limitType":"afterTimeInterval","limitWaitTime":false,"operation":"page"} }),
    resumeUnit: resolveSchema({ parameters, schema: z.union([z.literal('minutes'), z.literal('hours'), z.literal('days'), expressionSchema]), required: false, displayOptions: {"show":{"limitType":["afterTimeInterval"],"limitWaitTime":[true],"operation":["page","completion"]}}, defaults: {"limitType":"afterTimeInterval","limitWaitTime":false,"operation":"page"} }),
    maxDateAndTime: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"limitType":["atSpecifiedTime"],"limitWaitTime":[true],"operation":["page","completion"]}}, defaults: {"limitType":"afterTimeInterval","limitWaitTime":false,"operation":"page"} }),
    options: resolveSchema({ parameters, schema: z.object({ formTitle: stringOrExpression.optional(), formDescription: stringOrExpression.optional(), buttonLabel: stringOrExpression.optional(), customCss: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["page","completion"],"respondWith":["text","returnBinary","redirect"]}}, defaults: {"operation":"page","respondWith":"text"} }),
    respondWith: resolveSchema({ parameters, schema: z.union([z.literal('text'), z.literal('redirect'), z.literal('showText'), z.literal('returnBinary'), expressionSchema]), required: false, displayOptions: {"show":{"operation":["completion"]}}, defaults: {"operation":"page"} }),
    redirectUrl: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"respondWith":["redirect"],"operation":["completion"]}}, defaults: {"respondWith":"text","operation":"page"} }),
    completionTitle: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"respondWith":["text","returnBinary"],"operation":["completion"]}}, defaults: {"respondWith":"text","operation":"page"} }),
    completionMessage: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"respondWith":["text","returnBinary"],"operation":["completion"]}}, defaults: {"respondWith":"text","operation":"page"} }),
    responseText: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"respondWith":["showText"],"operation":["completion"]}}, defaults: {"respondWith":"text","operation":"page"} }),
    inputDataFieldName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"respondWith":["returnBinary"],"operation":["completion"]}}, defaults: {"respondWith":"text","operation":"page"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};