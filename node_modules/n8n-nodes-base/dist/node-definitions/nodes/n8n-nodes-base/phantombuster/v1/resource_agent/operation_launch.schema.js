/**
 * Phantombuster Node - Version 1 - Zod Schema
 * Discriminator: resource=agent, operation=launch
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
      resource: z.literal('agent').default('agent'),
      operation: z.literal('launch').default('launch'),
      agentId: stringOrExpression.optional(),
      resolveData: booleanOrExpression.optional(),
      jsonParameters: booleanOrExpression.optional(),
      additionalFields: z.object({ argumentsJson: z.union([iDataObjectSchema, z.string()]).optional(), argumentsUi: z.unknown().optional(), bonusArgumentUi: z.unknown().optional(), bonusArgumentJson: stringOrExpression.optional(), manualLaunch: booleanOrExpression.optional(), maxInstanceCount: numberOrExpression.optional(), saveArgument: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};