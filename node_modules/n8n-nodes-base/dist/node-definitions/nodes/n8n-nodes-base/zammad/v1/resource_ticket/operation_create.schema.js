/**
 * Zammad Node - Version 1 - Zod Schema
 * Discriminator: resource=ticket, operation=create
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
      resource: z.literal('ticket'),
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('basicAuth'), z.literal('tokenAuth'), expressionSchema]).optional(),
      title: stringOrExpression.optional(),
      group: stringOrExpression.optional(),
      customer: stringOrExpression.optional(),
      article: z.object({ articleDetails: z.object({ subject: stringOrExpression.optional(), body: stringOrExpression.optional(), visibility: z.union([z.literal('external'), z.literal('internal'), expressionSchema]).optional(), sender: z.union([z.literal('Agent'), z.literal('Customer'), z.literal('System'), expressionSchema]).optional(), type: z.union([z.literal('chat'), z.literal('email'), z.literal('fax'), z.literal('note'), z.literal('phone'), z.literal('sms'), expressionSchema]).optional(), reply_to: stringOrExpression.optional() }).optional() }).optional(),
      additionalFields: z.object({ customFieldsUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};