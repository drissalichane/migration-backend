/**
 * Gmail Node - Version 1 - Zod Schema
 * Discriminator: resource=draft, operation=create
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
      resource: z.literal('draft').default('draft'),
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('oAuth2'), z.literal('serviceAccount'), expressionSchema]).optional(),
      subject: stringOrExpression.optional(),
      includeHtml: booleanOrExpression.optional(),
      htmlMessage: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"includeHtml":[true]}}, defaults: {"includeHtml":false} }),
      message: stringOrExpression.optional(),
      additionalFields: z.object({ toList: stringOrExpression.optional(), ccList: stringOrExpression.optional(), bccList: stringOrExpression.optional(), attachmentsUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};