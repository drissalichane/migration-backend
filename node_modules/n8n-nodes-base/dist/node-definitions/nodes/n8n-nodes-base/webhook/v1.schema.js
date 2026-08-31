/**
 * Webhook Node - Version 1 - Zod Validation Schemas
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
    multipleMethods: booleanOrExpression.optional(),
    httpMethod: resolveSchema({ parameters, schema: z.union([z.literal('DELETE'), z.literal('GET'), z.literal('HEAD'), z.literal('PATCH'), z.literal('POST'), z.literal('PUT'), expressionSchema]), required: false, displayOptions: {"show":{"multipleMethods":[false,true]}}, defaults: {"multipleMethods":false} }),
    path: stringOrExpression.optional(),
    authentication: z.union([z.literal('basicAuth'), z.literal('headerAuth'), z.literal('jwtAuth'), z.literal('none'), expressionSchema]).optional(),
    responseMode: z.union([z.literal('onReceived'), z.literal('lastNode'), z.literal('responseNode'), expressionSchema]).optional(),
    responseCode: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"hide":{"responseMode":["responseNode"]}}, defaults: {"responseMode":"onReceived"} }),
    responseData: resolveSchema({ parameters, schema: z.union([z.literal('allEntries'), z.literal('firstEntryJson'), z.literal('firstEntryBinary'), z.literal('noData'), expressionSchema]), required: false, displayOptions: {"show":{"responseMode":["lastNode"]}}, defaults: {"responseMode":"onReceived"} }),
    responseBinaryPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"responseData":["firstEntryBinary"]}}, defaults: {"responseData":"firstEntryJson"} }),
    options: z.object({ allowedOrigins: stringOrExpression.optional(), binaryData: booleanOrExpression.optional(), binaryPropertyName: stringOrExpression.optional(), ignoreBots: booleanOrExpression.optional(), ipWhitelist: stringOrExpression.optional(), noResponseBody: booleanOrExpression.optional(), responsePropertyName: stringOrExpression.optional(), binaryPropertyName: stringOrExpression.optional(), rawBody: booleanOrExpression.optional(), rawBody: booleanOrExpression.optional(), responseCode: z.unknown().optional(), responseContentType: stringOrExpression.optional(), responseData: stringOrExpression.optional(), responseHeaders: z.unknown().optional() }).optional(),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};