/**
 * Send Email Node - Version 2 - Zod Validation Schemas
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
    resource: z.unknown().optional(),
    operation: resolveSchema({ parameters, schema: z.union([z.literal('send'), z.literal('sendAndWait')]), required: false, displayOptions: {"show":{"resource":["email"]}}, defaults: {"resource":"email"} }),
    fromEmail: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"resource":["email"],"operation":["send","sendAndWait"]}}, defaults: {"resource":"email","operation":"send"} }),
    toEmail: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"resource":["email"],"operation":["send","sendAndWait"]}}, defaults: {"resource":"email","operation":"send"} }),
    subject: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"resource":["email"],"operation":["send","sendAndWait"]}}, defaults: {"resource":"email","operation":"send"} }),
    emailFormat: resolveSchema({ parameters, schema: z.union([z.literal('text'), z.literal('html'), z.literal('both'), expressionSchema]), required: false, displayOptions: {"show":{"resource":["email"],"operation":["send"]}}, defaults: {"resource":"email","operation":"send"} }),
    text: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"emailFormat":["text","both"],"resource":["email"],"operation":["send"]}}, defaults: {"emailFormat":"text","resource":"email","operation":"send"} }),
    html: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"emailFormat":["html","both"],"resource":["email"],"operation":["send"]}}, defaults: {"emailFormat":"text","resource":"email","operation":"send"} }),
    options: resolveSchema({ parameters, schema: z.object({ appendAttribution: booleanOrExpression.optional(), attachments: stringOrExpression.optional(), ccEmail: stringOrExpression.optional(), bccEmail: stringOrExpression.optional(), allowUnauthorizedCerts: booleanOrExpression.optional(), replyTo: stringOrExpression.optional(), limitWaitTime: z.unknown().optional(), messageButtonLabel: stringOrExpression.optional(), responseFormTitle: stringOrExpression.optional(), responseFormDescription: stringOrExpression.optional(), responseFormButtonLabel: stringOrExpression.optional(), responseFormCustomCss: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"resource":["email"],"operation":["send","sendAndWait"],"responseType":["approval","freeText","customForm"]}}, defaults: {"resource":"email","operation":"send","responseType":"approval"} }),
    message: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"resource":["email"],"operation":["sendAndWait"]}}, defaults: {"resource":"email","operation":"send"} }),
    responseType: resolveSchema({ parameters, schema: z.union([z.literal('approval'), z.literal('freeText'), z.literal('customForm'), expressionSchema]), required: false, displayOptions: {"show":{"resource":["email"],"operation":["sendAndWait"]}}, defaults: {"resource":"email","operation":"send"} }),
    defineForm: resolveSchema({ parameters, schema: z.union([z.literal('fields'), z.literal('json')]), required: false, displayOptions: {"show":{"responseType":["customForm"],"resource":["email"],"operation":["sendAndWait"]}}, defaults: {"responseType":"approval","resource":"email","operation":"send"} }),
    jsonOutput: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"defineForm":["json"],"responseType":["customForm"],"resource":["email"],"operation":["sendAndWait"]}}, defaults: {"defineForm":"fields","responseType":"approval","resource":"email","operation":"send"} }),
    formFields: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ fieldName: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), fieldType: z.union([z.literal('checkbox'), z.literal('html'), z.literal('date'), z.literal('dropdown'), z.literal('email'), z.literal('file'), z.literal('hiddenField'), z.literal('number'), z.literal('password'), z.literal('radio'), z.literal('text'), z.literal('textarea'), expressionSchema]).optional(), elementName: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), placeholder: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), fieldValue: stringOrExpression.optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), multiselect: booleanOrExpression.optional(), limitSelection: z.union([z.literal('exact'), z.literal('range'), z.literal('unlimited'), expressionSchema]).optional(), numberOfSelections: numberOrExpression.optional(), minSelections: numberOrExpression.optional(), maxSelections: numberOrExpression.optional(), html: z.string().optional(), multipleFiles: booleanOrExpression.optional(), acceptFileTypes: stringOrExpression.optional(), requiredField: booleanOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"defineForm":["fields"],"responseType":["customForm"],"resource":["email"],"operation":["sendAndWait"]}}, defaults: {"defineForm":"fields","responseType":"approval","resource":"email","operation":"send"} }),
    approvalOptions: resolveSchema({ parameters, schema: z.object({ values: z.object({ approvalType: z.union([z.literal('single'), z.literal('double'), expressionSchema]).optional(), approveLabel: stringOrExpression.optional(), buttonApprovalStyle: z.union([z.literal('primary'), z.literal('secondary'), expressionSchema]).optional(), disapproveLabel: stringOrExpression.optional(), buttonDisapprovalStyle: z.union([z.literal('primary'), z.literal('secondary'), expressionSchema]).optional() }).optional() }), required: false, displayOptions: {"show":{"responseType":["approval"],"resource":["email"],"operation":["sendAndWait"]}}, defaults: {"responseType":"approval","resource":"email","operation":"send"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};