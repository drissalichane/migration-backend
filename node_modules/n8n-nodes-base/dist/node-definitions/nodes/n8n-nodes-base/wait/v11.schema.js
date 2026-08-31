/**
 * Wait Node - Version 1.1 - Zod Validation Schemas
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
    resume: z.union([z.literal('timeInterval'), z.literal('specificTime'), z.literal('webhook'), z.literal('form'), expressionSchema]).optional(),
    incomingAuthentication: resolveSchema({ parameters, schema: z.union([z.literal('basicAuth'), z.literal('none'), expressionSchema]), required: false, displayOptions: {"show":{"resume":["form","webhook"]}}, defaults: {"resume":"timeInterval"} }),
    dateTime: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"resume":["specificTime"]}}, defaults: {"resume":"timeInterval"} }),
    amount: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"resume":["timeInterval"]}}, defaults: {"resume":"timeInterval"} }),
    unit: resolveSchema({ parameters, schema: z.union([z.literal('seconds'), z.literal('minutes'), z.literal('hours'), z.literal('days'), expressionSchema]), required: false, displayOptions: {"show":{"resume":["timeInterval"]}}, defaults: {"resume":"timeInterval"} }),
    formTitle: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"resume":["form"]}}, defaults: {"resume":"timeInterval"} }),
    formDescription: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"resume":["form"]}}, defaults: {"resume":"timeInterval"} }),
    formFields: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ fieldName: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), fieldType: z.union([z.literal('checkbox'), z.literal('html'), z.literal('date'), z.literal('dropdown'), z.literal('email'), z.literal('file'), z.literal('hiddenField'), z.literal('number'), z.literal('password'), z.literal('radio'), z.literal('text'), z.literal('textarea'), expressionSchema]).optional(), elementName: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), placeholder: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), fieldValue: stringOrExpression.optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), multiselect: booleanOrExpression.optional(), limitSelection: z.union([z.literal('exact'), z.literal('range'), z.literal('unlimited'), expressionSchema]).optional(), numberOfSelections: numberOrExpression.optional(), minSelections: numberOrExpression.optional(), maxSelections: numberOrExpression.optional(), html: z.string().optional(), multipleFiles: booleanOrExpression.optional(), acceptFileTypes: stringOrExpression.optional(), requiredField: booleanOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"resume":["form"]}}, defaults: {"resume":"timeInterval"} }),
    responseMode: resolveSchema({ parameters, schema: z.union([z.literal('onReceived'), z.literal('lastNode'), z.literal('responseNode'), expressionSchema]), required: false, displayOptions: {"show":{"resume":["form","webhook"]}}, defaults: {"resume":"timeInterval"} }),
    httpMethod: resolveSchema({ parameters, schema: z.union([z.literal('DELETE'), z.literal('GET'), z.literal('HEAD'), z.literal('PATCH'), z.literal('POST'), z.literal('PUT'), expressionSchema]), required: false, displayOptions: {"show":{"resume":["webhook"]}}, defaults: {"resume":"timeInterval"} }),
    responseCode: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"resume":["webhook"]},"hide":{"responseMode":["responseNode"]}}, defaults: {"resume":"timeInterval","responseMode":"onReceived"} }),
    responseData: resolveSchema({ parameters, schema: z.union([z.literal('allEntries'), z.literal('firstEntryJson'), z.literal('firstEntryBinary'), z.literal('noData'), expressionSchema]), required: false, displayOptions: {"show":{"responseMode":["lastNode"],"resume":["webhook"]}}, defaults: {"responseMode":"onReceived","resume":"timeInterval"} }),
    responseBinaryPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"responseData":["firstEntryBinary"],"resume":["webhook"]}}, defaults: {"responseData":"firstEntryJson","resume":"timeInterval"} }),
    limitWaitTime: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"resume":["webhook","form"]}}, defaults: {"resume":"timeInterval"} }),
    limitType: resolveSchema({ parameters, schema: z.union([z.literal('afterTimeInterval'), z.literal('atSpecifiedTime'), expressionSchema]), required: false, displayOptions: {"show":{"limitWaitTime":[true],"resume":["webhook","form"]}}, defaults: {"limitWaitTime":false,"resume":"timeInterval"} }),
    resumeAmount: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"limitType":["afterTimeInterval"],"limitWaitTime":[true],"resume":["webhook","form"]}}, defaults: {"limitType":"afterTimeInterval","limitWaitTime":false,"resume":"timeInterval"} }),
    resumeUnit: resolveSchema({ parameters, schema: z.union([z.literal('seconds'), z.literal('minutes'), z.literal('hours'), z.literal('days'), expressionSchema]), required: false, displayOptions: {"show":{"limitType":["afterTimeInterval"],"limitWaitTime":[true],"resume":["webhook","form"]}}, defaults: {"limitType":"afterTimeInterval","limitWaitTime":false,"resume":"timeInterval"} }),
    maxDateAndTime: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"limitType":["atSpecifiedTime"],"limitWaitTime":[true],"resume":["webhook","form"]}}, defaults: {"limitType":"afterTimeInterval","limitWaitTime":false,"resume":"timeInterval"} }),
    options: resolveSchema({ parameters, schema: z.object({ binaryData: booleanOrExpression.optional(), binaryPropertyName: stringOrExpression.optional(), binaryPropertyName: stringOrExpression.optional(), ignoreBots: booleanOrExpression.optional(), ipWhitelist: stringOrExpression.optional(), noResponseBody: booleanOrExpression.optional(), rawBody: booleanOrExpression.optional(), rawBody: booleanOrExpression.optional(), responseData: stringOrExpression.optional(), responseContentType: stringOrExpression.optional(), responseHeaders: z.unknown().optional(), responsePropertyName: stringOrExpression.optional(), webhookSuffix: z.string().optional(), appendAttribution: booleanOrExpression.optional(), respondWithOptions: z.unknown().optional() }), required: false, displayOptions: {"show":{"resume":["webhook","form"]},"hide":{"responseMode":["responseNode","onReceived","lastNode"]}}, defaults: {"resume":"timeInterval","responseMode":"onReceived"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};