/**
 * Freshworks CRM Node - Version 1 - Zod Schema
 * Discriminator: resource=task, operation=create
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
      operation: z.literal('create').default('create'),
      title: stringOrExpression.optional(),
      dueDate: stringOrExpression.optional(),
      ownerId: stringOrExpression.optional(),
      targetableType: z.union([z.literal('Contact'), z.literal('Deal'), z.literal('SalesAccount'), expressionSchema]).optional(),
      targetable_id: stringOrExpression.optional(),
      additionalFields: z.object({ creater_id: stringOrExpression.optional(), outcome_id: stringOrExpression.optional(), task_type_id: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};