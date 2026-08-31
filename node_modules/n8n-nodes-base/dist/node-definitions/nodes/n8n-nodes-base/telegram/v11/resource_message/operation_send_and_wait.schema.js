/**
 * Telegram Node - Version 1.1 - Zod Schema
 * Discriminator: resource=message, operation=sendAndWait
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
      resource: z.literal('message').default('message'),
      operation: z.literal('sendAndWait'),
      forceReply: resolveSchema({ parameters, schema: z.object({ force_reply: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["forceReply"]}} }),
      inlineKeyboard: resolveSchema({ parameters, schema: z.object({ rows: z.array(z.object({ row: z.unknown().optional() })).optional() }), required: false, displayOptions: {"show":{"replyMarkup":["inlineKeyboard"]}} }),
      replyKeyboard: resolveSchema({ parameters, schema: z.object({ rows: z.array(z.object({ row: z.unknown().optional() })).optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboard"]}} }),
      replyKeyboardOptions: resolveSchema({ parameters, schema: z.object({ resize_keyboard: booleanOrExpression.optional(), one_time_keyboard: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboard"]}} }),
      replyKeyboardRemove: resolveSchema({ parameters, schema: z.object({ remove_keyboard: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboardRemove"]}} }),
      chatId: stringOrExpression.optional(),
      message: stringOrExpression.optional(),
      responseType: z.union([z.literal('approval'), z.literal('freeText'), z.literal('customForm'), expressionSchema]).optional(),
      defineForm: resolveSchema({ parameters, schema: z.union([z.literal('fields'), z.literal('json')]), required: false, displayOptions: {"show":{"responseType":["customForm"]}}, defaults: {"responseType":"approval"} }),
      jsonOutput: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"defineForm":["json"],"responseType":["customForm"]}}, defaults: {"defineForm":"fields","responseType":"approval"} }),
      formFields: resolveSchema({ parameters, schema: z.object({ values: z.array(z.object({ fieldName: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldLabel: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), fieldType: z.union([z.literal('checkbox'), z.literal('html'), z.literal('date'), z.literal('dropdown'), z.literal('email'), z.literal('file'), z.literal('hiddenField'), z.literal('number'), z.literal('password'), z.literal('radio'), z.literal('text'), z.literal('textarea'), expressionSchema]).optional(), elementName: stringOrExpression.optional(), fieldName: stringOrExpression.optional(), placeholder: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), defaultValue: stringOrExpression.optional(), fieldValue: stringOrExpression.optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), fieldOptions: z.unknown().optional(), multiselect: booleanOrExpression.optional(), limitSelection: z.union([z.literal('exact'), z.literal('range'), z.literal('unlimited'), expressionSchema]).optional(), numberOfSelections: numberOrExpression.optional(), minSelections: numberOrExpression.optional(), maxSelections: numberOrExpression.optional(), html: z.string().optional(), multipleFiles: booleanOrExpression.optional(), acceptFileTypes: stringOrExpression.optional(), requiredField: booleanOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"defineForm":["fields"],"responseType":["customForm"]}}, defaults: {"defineForm":"fields","responseType":"approval"} }),
      approvalOptions: resolveSchema({ parameters, schema: z.object({ values: z.object({ approvalType: z.union([z.literal('single'), z.literal('double'), expressionSchema]).optional(), approveLabel: stringOrExpression.optional(), disapproveLabel: stringOrExpression.optional() }).optional() }), required: false, displayOptions: {"show":{"responseType":["approval"]}}, defaults: {"responseType":"approval"} }),
      options: resolveSchema({ parameters, schema: z.object({ limitWaitTime: z.unknown().optional(), appendAttribution: booleanOrExpression.optional(), messageButtonLabel: stringOrExpression.optional(), responseFormTitle: stringOrExpression.optional(), responseFormDescription: stringOrExpression.optional(), responseFormButtonLabel: stringOrExpression.optional(), responseFormCustomCss: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"responseType":["approval","freeText","customForm"]}}, defaults: {"responseType":"approval"} }),
    }).optional(),
  });
};