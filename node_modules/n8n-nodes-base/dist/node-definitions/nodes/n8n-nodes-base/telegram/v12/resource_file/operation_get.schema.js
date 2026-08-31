/**
 * Telegram Node - Version 1.2 - Zod Schema
 * Discriminator: resource=file, operation=get
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
      resource: z.literal('file'),
      operation: z.literal('get').default('get'),
      fileId: stringOrExpression.optional(),
      download: booleanOrExpression.optional(),
      additionalFields: resolveSchema({ parameters, schema: z.object({ mimeType: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"download":[true]}}, defaults: {"download":true} }),
      replyKeyboard: resolveSchema({ parameters, schema: z.object({ rows: z.array(z.object({ row: z.unknown().optional() })).optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboard"]}} }),
      replyKeyboardOptions: resolveSchema({ parameters, schema: z.object({ resize_keyboard: booleanOrExpression.optional(), one_time_keyboard: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboard"]}} }),
      replyKeyboardRemove: resolveSchema({ parameters, schema: z.object({ remove_keyboard: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboardRemove"]}} }),
    }).optional(),
  });
};