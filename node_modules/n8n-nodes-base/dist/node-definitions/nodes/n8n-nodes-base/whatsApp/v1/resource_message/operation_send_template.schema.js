/**
 * WhatsApp Business Cloud Node - Version 1 - Zod Schema
 * Discriminator: resource=message, operation=sendTemplate
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
      resource: z.literal('message').default('message'),
      operation: z.literal('sendTemplate').default('sendTemplate'),
      messagingProduct: z.unknown().optional(),
      phoneNumberId: stringOrExpression.optional(),
      recipientPhoneNumber: stringOrExpression.optional(),
      template: stringOrExpression.optional(),
      components: z.object({ component: z.array(z.object({ type: z.union([z.literal('body'), z.literal('button'), z.literal('header'), expressionSchema]).optional(), bodyParameters: z.unknown().optional(), sub_type: z.union([z.literal('quick_reply'), z.literal('url'), expressionSchema]).optional(), index: numberOrExpression.optional(), buttonParameters: z.unknown().optional(), headerParameters: z.unknown().optional() })).optional() }).optional(),
    }).optional(),
  });
};