/**
 * Twist Node - Version 1 - Zod Schema
 * Discriminator: resource=thread, operation=update
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
      operation: z.literal('update'),
      threadId: stringOrExpression.optional(),
      updateFields: z.object({ actionsUi: z.unknown().optional(), binaryProperties: stringOrExpression.optional(), content: stringOrExpression.optional(), direct_mentions: z.array(z.string()).optional(), title: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};