/**
 * Microsoft To Do Node - Version 1 - Zod Schema
 * Discriminator: resource=task, operation=update
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
      resource: z.literal('task').default('task'),
      operation: z.literal('update'),
      taskListId: stringOrExpression.optional(),
      taskId: stringOrExpression.optional(),
      updateFields: z.object({ content: stringOrExpression.optional(), dueDateTime: stringOrExpression.optional(), reminderDateTime: stringOrExpression.optional(), importance: z.union([z.literal('low'), z.literal('normal'), z.literal('high'), expressionSchema]).optional(), status: z.union([z.literal('notStarted'), z.literal('inProgress'), z.literal('completed'), z.literal('waitingOnOthers'), z.literal('deferred'), expressionSchema]).optional(), title: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};