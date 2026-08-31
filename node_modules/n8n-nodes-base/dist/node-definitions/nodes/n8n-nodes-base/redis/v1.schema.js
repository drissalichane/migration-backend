/**
 * Redis Node - Version 1 - Zod Validation Schemas
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
    operation: z.union([z.literal('delete'), z.literal('get'), z.literal('incr'), z.literal('info'), z.literal('keys'), z.literal('llen'), z.literal('pop'), z.literal('publish'), z.literal('push'), z.literal('set')]).optional(),
    key: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["delete","get","incr","set"]}}, defaults: {"operation":"info"} }),
    propertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["get","pop"]}}, defaults: {"operation":"info"} }),
    keyType: resolveSchema({ parameters, schema: z.union([z.literal('automatic'), z.literal('hash'), z.literal('list'), z.literal('sets'), z.literal('string'), expressionSchema]), required: false, displayOptions: {"show":{"operation":["get","set"]}}, defaults: {"operation":"info"} }),
    options: resolveSchema({ parameters, schema: z.object({ dotNotation: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"operation":["get","pop"]}}, defaults: {"operation":"info"} }),
    expire: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["incr","set"]}}, defaults: {"operation":"info"} }),
    ttl: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"operation":["incr","set"],"expire":[true]}}, defaults: {"operation":"info","expire":false} }),
    keyPattern: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["keys"]}}, defaults: {"operation":"info"} }),
    getValues: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["keys"]}}, defaults: {"operation":"info"} }),
    list: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["llen","push","pop"]}}, defaults: {"operation":"info"} }),
    value: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["set"]}}, defaults: {"operation":"info"} }),
    valueIsJSON: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"keyType":["hash"]}}, defaults: {"keyType":"automatic"} }),
    channel: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["publish"]}}, defaults: {"operation":"info"} }),
    messageData: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"operation":["publish","push"]}}, defaults: {"operation":"info"} }),
    tail: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"operation":["push","pop"]}}, defaults: {"operation":"info"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};