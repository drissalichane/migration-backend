/**
 * Microsoft Outlook Node - Version 2 - Zod Schema
 * Discriminator: resource=message, operation=getAll
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
      operation: z.literal('getAll').default('getAll'),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      output: z.union([z.literal('simple'), z.literal('raw'), z.literal('fields'), expressionSchema]).optional(),
      fields: resolveSchema({ parameters, schema: z.array(z.union([z.literal('bccRecipients'), z.literal('body'), z.literal('bodyPreview'), z.literal('categories'), z.literal('ccRecipients'), z.literal('changeKey'), z.literal('conversationId'), z.literal('createdDateTime'), z.literal('flag'), z.literal('from'), z.literal('hasAttachments'), z.literal('importance'), z.literal('inferenceClassification'), z.literal('internetMessageId'), z.literal('isDeliveryReceiptRequested'), z.literal('isDraft'), z.literal('isRead'), z.literal('isReadReceiptRequested'), z.literal('lastModifiedDateTime'), z.literal('parentFolderId'), z.literal('receivedDateTime'), z.literal('replyTo'), z.literal('sender'), z.literal('sentDateTime'), z.literal('subject'), z.literal('toRecipients'), z.literal('webLink')])), required: false, displayOptions: {"show":{"output":["fields"]}}, defaults: {"output":"simple"} }),
      filtersUI: z.object({ values: z.object({ filterBy: z.union([z.literal('filters'), z.literal('search'), expressionSchema]).optional(), search: stringOrExpression.optional(), filters: z.unknown().optional() }).optional() }).optional(),
      options: z.object({ attachmentsPrefix: stringOrExpression.optional(), downloadAttachments: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};