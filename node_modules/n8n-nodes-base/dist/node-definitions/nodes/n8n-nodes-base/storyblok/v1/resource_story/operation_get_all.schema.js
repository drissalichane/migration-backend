/**
 * Storyblok Node - Version 1 - Zod Schema
 * Discriminator: resource=story, operation=getAll
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
      resource: z.literal('story').default('story'),
      operation: z.literal('getAll'),
      source: z.union([z.literal('contentApi'), z.literal('managementApi'), expressionSchema]).optional(),
      returnAll: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"source":["contentApi","managementApi"]}}, defaults: {"source":"contentApi"} }),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"source":["contentApi","managementApi"],"returnAll":[false]}}, defaults: {"source":"contentApi","returnAll":false} }),
      filters: resolveSchema({ parameters, schema: z.object({ starts_with: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"source":["contentApi","managementApi"]}}, defaults: {"source":"contentApi"} }),
      space: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"source":["managementApi"]}}, defaults: {"source":"contentApi"} }),
    }).optional(),
  });
};