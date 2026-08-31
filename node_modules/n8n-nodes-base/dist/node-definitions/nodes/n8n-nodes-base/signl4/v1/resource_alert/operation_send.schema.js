/**
 * SIGNL4 Node - Version 1 - Zod Schema
 * Discriminator: resource=alert, operation=send
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
      resource: z.literal('alert').default('alert'),
      operation: z.literal('send').default('send'),
      message: stringOrExpression.optional(),
      additionalFields: z.object({ alertingScenario: z.union([z.literal('single_ack'), z.literal('multi_ack'), expressionSchema]).optional(), attachmentsUi: z.unknown().optional(), externalId: stringOrExpression.optional(), filtering: booleanOrExpression.optional(), locationFieldsUi: z.unknown().optional(), service: stringOrExpression.optional(), title: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};