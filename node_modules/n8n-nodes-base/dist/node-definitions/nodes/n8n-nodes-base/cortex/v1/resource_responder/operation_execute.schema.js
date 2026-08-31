/**
 * Cortex Node - Version 1 - Zod Schema
 * Discriminator: resource=responder, operation=execute
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('responder'),
      operation: z.literal('execute').default('execute'),
      responder: stringOrExpression.optional(),
      entityType: stringOrExpression.optional(),
      jsonObject: booleanOrExpression.optional(),
      objectData: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"jsonObject":[true]}}, defaults: {"jsonObject":false} }),
      parameters: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"jsonObject":[false],"entityType":["case","alert","case_artifact","case_task","case_task_log"]},"hide":{"entityType":["","alert","case_artifact","case_task","case_task_log","case"],"responder":[""]}}, defaults: {"jsonObject":false,"entityType":"","responder":""} }),
    }).optional(),
  });
};