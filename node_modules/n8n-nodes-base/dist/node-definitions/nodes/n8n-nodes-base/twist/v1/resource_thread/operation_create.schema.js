/**
 * Twist Node - Version 1 - Zod Schema
 * Discriminator: resource=thread, operation=create
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
      resource: z.literal('thread'),
      operation: z.literal('create').default('create'),
      channelId: stringOrExpression.optional(),
      title: stringOrExpression.optional(),
      content: stringOrExpression.optional(),
      additionalFields: z.object({ actionsUi: z.unknown().optional(), binaryProperties: stringOrExpression.optional(), direct_mentions: z.array(z.string()).optional(), recipients: z.array(z.string()).optional(), send_as_integration: booleanOrExpression.optional(), temp_id: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};