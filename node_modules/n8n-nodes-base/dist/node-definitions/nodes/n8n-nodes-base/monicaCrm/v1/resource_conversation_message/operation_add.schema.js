/**
 * Monica CRM Node - Version 1 - Zod Schema
 * Discriminator: resource=conversationMessage, operation=add
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
      resource: z.literal('conversationMessage'),
      operation: z.literal('add'),
      conversationId: stringOrExpression.optional(),
      content: stringOrExpression.optional(),
      writtenAt: stringOrExpression.optional(),
      writtenByMe: z.union([z.literal(true), z.literal(false), expressionSchema]).optional(),
    }).optional(),
  });
};