/**
 * HighLevel Node - Version 2 - Zod Schema
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
      resource: z.literal('task'),
      operation: z.literal('update'),
      contactId: stringOrExpression.optional(),
      taskId: stringOrExpression.optional(),
      updateFields: z.object({ assignedTo: stringOrExpression.optional(), completed: booleanOrExpression.optional(), body: stringOrExpression.optional(), dueDate: stringOrExpression.optional(), title: stringOrExpression.optional() }).optional(),
      requestOptions: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};