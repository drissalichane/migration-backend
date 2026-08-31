/**
 * RabbitMQ Trigger Node - Version 1 - Zod Validation Schemas
 *
 * These schemas validate node configuration at runtime.
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  // Parameters schema
  const parametersSchema = z.object({
    queue: stringOrExpression.optional(),
    options: z.object({ arguments: z.unknown().optional(), assertExchange: booleanOrExpression.optional(), assertQueue: booleanOrExpression.optional(), autoDelete: booleanOrExpression.optional(), binding: z.unknown().optional(), contentIsBinary: booleanOrExpression.optional(), acknowledge: z.union([z.literal('executionFinishes'), z.literal('executionFinishesSuccessfully'), z.literal('immediately'), z.literal('laterMessageNode'), expressionSchema]).optional(), durable: booleanOrExpression.optional(), exclusive: booleanOrExpression.optional(), headers: z.unknown().optional(), jsonParseBody: booleanOrExpression.optional(), onlyContent: booleanOrExpression.optional(), parallelMessages: numberOrExpression.optional() }).optional(),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};