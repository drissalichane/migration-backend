/**
 * Wekan Node - Version 1 - Zod Schema
 * Discriminator: resource=checklistItem, operation=update
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
      resource: z.literal('checklistItem'),
      operation: z.literal('update'),
      boardId: stringOrExpression.optional(),
      listId: stringOrExpression.optional(),
      cardId: stringOrExpression.optional(),
      checklistId: stringOrExpression.optional(),
      checklistItemId: stringOrExpression.optional(),
      updateFields: z.object({ title: stringOrExpression.optional(), isFinished: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};