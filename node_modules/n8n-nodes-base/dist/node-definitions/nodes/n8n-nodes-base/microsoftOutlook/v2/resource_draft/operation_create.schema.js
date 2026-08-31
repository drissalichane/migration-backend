/**
 * Microsoft Outlook Node - Version 2 - Zod Schema
 * Discriminator: resource=draft, operation=create
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
      operation: z.literal('create'),
      subject: stringOrExpression.optional(),
      bodyContent: stringOrExpression.optional(),
      additionalFields: z.object({ attachments: z.unknown().optional(), bccRecipients: stringOrExpression.optional(), categories: z.array(z.string()).optional(), ccRecipients: stringOrExpression.optional(), internetMessageHeaders: z.unknown().optional(), from: stringOrExpression.optional(), importance: z.union([z.literal('Low'), z.literal('Normal'), z.literal('High'), expressionSchema]).optional(), bodyContentType: z.union([z.literal('html'), z.literal('Text'), expressionSchema]).optional(), isReadReceiptRequested: booleanOrExpression.optional(), replyTo: stringOrExpression.optional(), toRecipients: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};