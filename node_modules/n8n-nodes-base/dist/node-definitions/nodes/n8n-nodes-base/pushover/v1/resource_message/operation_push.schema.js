/**
 * Pushover Node - Version 1 - Zod Schema
 * Discriminator: resource=message, operation=push
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
      resource: z.literal('message').default('message'),
      operation: z.literal('push').default('push'),
      userKey: stringOrExpression.optional(),
      message: stringOrExpression.optional(),
      priority: z.union([z.literal(-2), z.literal(-1), z.literal(0), z.literal(1), z.literal(2), expressionSchema]).optional(),
      retry: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"priority":[2]}}, defaults: {"priority":-2} }),
      expire: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"priority":[2]}}, defaults: {"priority":-2} }),
      additionalFields: z.object({ attachmentsUi: z.unknown().optional(), device: stringOrExpression.optional(), html: booleanOrExpression.optional(), sound: stringOrExpression.optional(), timestamp: stringOrExpression.optional(), title: stringOrExpression.optional(), timestamp: stringOrExpression.optional(), url: stringOrExpression.optional(), url_title: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};