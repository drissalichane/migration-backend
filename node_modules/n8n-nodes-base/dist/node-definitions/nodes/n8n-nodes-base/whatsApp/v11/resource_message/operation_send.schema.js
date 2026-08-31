/**
 * WhatsApp Business Cloud Node - Version 1.1 - Zod Schema
 * Discriminator: resource=message, operation=send
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
      operation: z.literal('send'),
      messagingProduct: z.unknown().optional(),
      phoneNumberId: stringOrExpression.optional(),
      recipientPhoneNumber: stringOrExpression.optional(),
      messageType: z.union([z.literal('audio'), z.literal('contacts'), z.literal('document'), z.literal('image'), z.literal('location'), z.literal('text'), z.literal('video')]).optional(),
      name: resolveSchema({ parameters, schema: z.object({ data: z.object({ formatted_name: stringOrExpression.optional(), first_name: stringOrExpression.optional(), last_name: stringOrExpression.optional(), middle_name: stringOrExpression.optional(), suffix: stringOrExpression.optional(), prefix: stringOrExpression.optional() }).optional() }), required: false, displayOptions: {"show":{"messageType":["contacts"]}}, defaults: {"messageType":"text"} }),
      additionalFields: resolveSchema({ parameters, schema: z.object({ addresses: z.unknown().optional(), birthday: stringOrExpression.optional(), emails: z.unknown().optional(), organization: z.unknown().optional(), phones: z.unknown().optional(), urls: z.unknown().optional(), mediaFilename: stringOrExpression.optional(), mediaCaption: stringOrExpression.optional(), previewUrl: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"messageType":["contacts","location","image","video","audio","sticker","document","text"]}}, defaults: {"messageType":"text"} }),
      longitude: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"messageType":["location"]}}, defaults: {"messageType":"text"} }),
      latitude: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"messageType":["location"]}}, defaults: {"messageType":"text"} }),
      textBody: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"messageType":["text"]}}, defaults: {"messageType":"text"} }),
      mediaPath: resolveSchema({ parameters, schema: z.union([z.literal('useMediaLink'), z.literal('useMediaId'), z.literal('useMedian8n'), expressionSchema]), required: false, displayOptions: {"show":{"messageType":["audio","document","image","video"]}}, defaults: {"messageType":"text"} }),
      mediaLink: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"messageType":["image","video","audio","sticker","document"],"mediaPath":["useMediaLink"]}}, defaults: {"messageType":"text","mediaPath":"useMediaLink"} }),
      mediaId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"messageType":["image","video","audio","sticker","document"],"mediaPath":["useMediaId"]}}, defaults: {"messageType":"text","mediaPath":"useMediaLink"} }),
      mediaPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"messageType":["image","video","audio","sticker","document"],"mediaPath":["useMedian8n"]}}, defaults: {"messageType":"text","mediaPath":"useMediaLink"} }),
      mediaFilename: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"messageType":["document"],"mediaPath":["useMediaId"]}}, defaults: {"messageType":"text","mediaPath":"useMediaLink"} }),
    }).optional(),
  });
};