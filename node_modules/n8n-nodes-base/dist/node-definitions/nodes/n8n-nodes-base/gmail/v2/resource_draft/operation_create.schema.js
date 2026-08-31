/**
 * Gmail Node - Version 2 - Zod Schema
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
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('oAuth2'), z.literal('serviceAccount'), expressionSchema]).optional(),
      subject: stringOrExpression.optional(),
      emailType: z.union([z.literal('html'), z.literal('text')]).optional(),
      message: stringOrExpression.optional(),
      options: z.object({ attachmentsUi: z.unknown().optional(), bccList: stringOrExpression.optional(), ccList: stringOrExpression.optional(), fromAlias: stringOrExpression.optional(), replyTo: stringOrExpression.optional(), threadId: stringOrExpression.optional(), sendTo: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};