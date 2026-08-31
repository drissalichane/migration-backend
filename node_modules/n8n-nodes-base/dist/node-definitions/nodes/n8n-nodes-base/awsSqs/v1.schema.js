/**
 * AWS SQS Node - Version 1 - Zod Validation Schemas
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
    authentication: z.union([z.literal('iam'), z.literal('assumeRole'), expressionSchema]).optional(),
    operation: z.union([z.literal('sendMessage')]).optional(),
    queue: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["sendMessage"]}}, defaults: {"operation":"sendMessage"} }),
    queueType: z.union([z.literal('fifo'), z.literal('standard'), expressionSchema]).optional(),
    sendInputData: booleanOrExpression.optional(),
    message: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["sendMessage"],"sendInputData":[false]}}, defaults: {"operation":"sendMessage","sendInputData":true} }),
    messageGroupId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"queueType":["fifo"]}}, defaults: {"queueType":"standard"} }),
    options: resolveSchema({ parameters, schema: z.object({ delaySeconds: numberOrExpression.optional(), messageAttributes: z.unknown().optional(), messageDeduplicationId: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["sendMessage"]}}, defaults: {"operation":"sendMessage"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};