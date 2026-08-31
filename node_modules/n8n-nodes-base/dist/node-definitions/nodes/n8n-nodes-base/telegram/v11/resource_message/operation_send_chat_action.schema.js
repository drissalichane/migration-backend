/**
 * Telegram Node - Version 1.1 - Zod Schema
 * Discriminator: resource=message, operation=sendChatAction
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
      operation: z.literal('sendChatAction'),
      chatId: stringOrExpression.optional(),
      action: z.union([z.literal('find_location'), z.literal('record_audio'), z.literal('record_video'), z.literal('record_video_note'), z.literal('typing'), z.literal('upload_audio'), z.literal('upload_document'), z.literal('upload_photo'), z.literal('upload_video'), z.literal('upload_video_note'), expressionSchema]).optional(),
      forceReply: resolveSchema({ parameters, schema: z.object({ force_reply: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["forceReply"]}} }),
      inlineKeyboard: resolveSchema({ parameters, schema: z.object({ rows: z.array(z.object({ row: z.unknown().optional() })).optional() }), required: false, displayOptions: {"show":{"replyMarkup":["inlineKeyboard"]}} }),
      replyKeyboard: resolveSchema({ parameters, schema: z.object({ rows: z.array(z.object({ row: z.unknown().optional() })).optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboard"]}} }),
      replyKeyboardOptions: resolveSchema({ parameters, schema: z.object({ resize_keyboard: booleanOrExpression.optional(), one_time_keyboard: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboard"]}} }),
      replyKeyboardRemove: resolveSchema({ parameters, schema: z.object({ remove_keyboard: booleanOrExpression.optional(), selective: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"replyMarkup":["replyKeyboardRemove"]}} }),
    }).optional(),
  });
};