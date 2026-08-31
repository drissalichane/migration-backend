/**
 * TheHive Node - Version 1 - Zod Schema
 * Discriminator: resource=log, operation=create
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
      resource: z.literal('log'),
      operation: z.literal('create').default('create'),
      taskId: stringOrExpression.optional(),
      message: stringOrExpression.optional(),
      startDate: stringOrExpression.optional(),
      status: z.union([z.literal('Ok'), z.literal('Deleted'), expressionSchema]).optional(),
      options: z.object({ attachmentValues: z.unknown().optional() }).optional(),
    }).optional(),
  });
};