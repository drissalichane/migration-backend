/**
 * Gmail Node - Version 1 - Zod Schema
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
      resource: z.literal('message'),
      operation: z.literal('send'),
      authentication: z.union([z.literal('oAuth2'), z.literal('serviceAccount'), expressionSchema]).optional(),
      subject: stringOrExpression.optional(),
      includeHtml: booleanOrExpression.optional(),
      htmlMessage: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"includeHtml":[true]}}, defaults: {"includeHtml":false} }),
      message: stringOrExpression.optional(),
      toList: stringOrExpression.optional(),
      additionalFields: z.object({ attachmentsUi: z.unknown().optional(), bccList: stringOrExpression.optional(), ccList: stringOrExpression.optional(), senderName: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};