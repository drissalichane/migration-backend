/**
 * Brevo Trigger Node - Version 1 - Zod Validation Schemas
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
    type: z.union([z.literal('inbound'), z.literal('marketing'), z.literal('transactional'), expressionSchema]).optional(),
    events: resolveSchema({ parameters, schema: z.array(z.union([z.literal('blocked'), z.literal('click'), z.literal('deferred'), z.literal('delivered'), z.literal('hardBounce'), z.literal('invalid'), z.literal('spam'), z.literal('opened'), z.literal('request'), z.literal('softBounce'), z.literal('uniqueOpened'), z.literal('unsubscribed')])), required: false, displayOptions: {"show":{"type":["transactional","marketing","inbound"]}}, defaults: {"type":"transactional"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};