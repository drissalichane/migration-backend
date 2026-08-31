/**
 * Microsoft Outlook Node - Version 2 - Zod Schema
 * Discriminator: resource=draft, operation=update
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('draft'),
      operation: z.literal('update'),
      draftId: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]).optional(),
      updateFields: z.object({ bccRecipients: stringOrExpression.optional(), categories: z.array(z.string()).optional(), ccRecipients: stringOrExpression.optional(), internetMessageHeaders: z.unknown().optional(), from: stringOrExpression.optional(), importance: z.union([z.literal('Low'), z.literal('Normal'), z.literal('High'), expressionSchema]).optional(), isRead: booleanOrExpression.optional(), bodyContent: stringOrExpression.optional(), bodyContentType: z.union([z.literal('html'), z.literal('Text'), expressionSchema]).optional(), isReadReceiptRequested: booleanOrExpression.optional(), replyTo: stringOrExpression.optional(), subject: stringOrExpression.optional(), toRecipients: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};