/**
 * HTTP Request Node - Version 4.1 - Zod Validation Schemas
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
    method: z.union([z.literal('DELETE'), z.literal('GET'), z.literal('HEAD'), z.literal('OPTIONS'), z.literal('PATCH'), z.literal('POST'), z.literal('PUT'), expressionSchema]).optional(),
    url: stringOrExpression.optional(),
    authentication: z.union([z.literal('none'), z.literal('predefinedCredentialType'), z.literal('genericCredentialType')]).optional(),
    nodeCredentialType: resolveSchema({ parameters, schema: z.string(), required: false, displayOptions: {"show":{"authentication":["predefinedCredentialType"]}}, defaults: {"authentication":"none"} }),
    genericAuthType: resolveSchema({ parameters, schema: z.union([z.literal('httpBasicAuth'), z.literal('httpBearerAuth'), z.literal('httpDigestAuth'), z.literal('httpHeaderAuth'), z.literal('httpQueryAuth'), z.literal('httpCustomAuth'), z.literal('oAuth1Api'), z.literal('oAuth2Api'), expressionSchema]), required: false, displayOptions: {"show":{"authentication":["genericCredentialType"]}}, defaults: {"authentication":"none"} }),
    provideSslCertificates: booleanOrExpression.optional(),
    sendQuery: z.boolean().optional(),
    specifyQuery: resolveSchema({ parameters, schema: z.union([z.literal('keypair'), z.literal('json'), expressionSchema]), required: false, displayOptions: {"show":{"sendQuery":[true]}}, defaults: {"sendQuery":false} }),
    queryParameters: resolveSchema({ parameters, schema: z.object({ parameters: z.array(z.object({ name: stringOrExpression.optional(), value: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"sendQuery":[true],"specifyQuery":["keypair"]}}, defaults: {"sendQuery":false,"specifyQuery":"keypair"} }),
    jsonQuery: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"sendQuery":[true],"specifyQuery":["json"]}}, defaults: {"sendQuery":false,"specifyQuery":"keypair"} }),
    sendHeaders: z.boolean().optional(),
    specifyHeaders: resolveSchema({ parameters, schema: z.union([z.literal('keypair'), z.literal('json'), expressionSchema]), required: false, displayOptions: {"show":{"sendHeaders":[true]}}, defaults: {"sendHeaders":false} }),
    headerParameters: resolveSchema({ parameters, schema: z.object({ parameters: z.array(z.object({ name: stringOrExpression.optional(), value: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"sendHeaders":[true],"specifyHeaders":["keypair"]}}, defaults: {"sendHeaders":false,"specifyHeaders":"keypair"} }),
    jsonHeaders: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"sendHeaders":[true],"specifyHeaders":["json"]}}, defaults: {"sendHeaders":false,"specifyHeaders":"keypair"} }),
    sendBody: z.boolean().optional(),
    contentType: resolveSchema({ parameters, schema: z.union([z.literal('form-urlencoded'), z.literal('multipart-form-data'), z.literal('json'), z.literal('binaryData'), z.literal('raw'), expressionSchema]), required: false, displayOptions: {"show":{"sendBody":[true]}}, defaults: {"sendBody":false} }),
    specifyBody: resolveSchema({ parameters, schema: z.union([z.literal('keypair'), z.literal('json'), expressionSchema]), required: false, displayOptions: {"show":{"sendBody":[true],"contentType":["json","form-urlencoded"]}}, defaults: {"sendBody":false,"contentType":"json"} }),
    bodyParameters: resolveSchema({ parameters, schema: z.object({ parameters: z.array(z.object({ name: stringOrExpression.optional(), value: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"sendBody":[true],"contentType":["json","multipart-form-data","form-urlencoded"],"specifyBody":["keypair"]}}, defaults: {"sendBody":false,"contentType":"json","specifyBody":"keypair"} }),
    jsonBody: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"sendBody":[true],"contentType":["json"],"specifyBody":["json"]}}, defaults: {"sendBody":false,"contentType":"json","specifyBody":"keypair"} }),
    body: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"sendBody":[true],"specifyBody":["string"],"contentType":["raw"]}}, defaults: {"sendBody":false,"specifyBody":"keypair","contentType":"json"} }),
    inputDataFieldName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"sendBody":[true],"contentType":["binaryData"]}}, defaults: {"sendBody":false,"contentType":"json"} }),
    rawContentType: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"sendBody":[true],"contentType":["raw"]}}, defaults: {"sendBody":false,"contentType":"json"} }),
    options: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), queryParameterArrays: z.union([z.literal('repeat'), z.literal('brackets'), z.literal('indices'), expressionSchema]).optional(), lowercaseHeaders: booleanOrExpression.optional(), redirect: z.unknown().optional(), redirect: z.unknown().optional(), response: z.unknown().optional(), pagination: z.unknown().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional(), sendCredentialsOnCrossOriginRedirect: booleanOrExpression.optional() }).optional(),
    optimizeResponse: resolveSchema({ parameters, schema: z.boolean(), required: false, displayOptions: {"show":{"@tool":[true]}} }),
    responseType: resolveSchema({ parameters, schema: z.union([z.literal('json'), z.literal('html'), z.literal('text'), expressionSchema]), required: false, displayOptions: {"show":{"optimizeResponse":[true],"@tool":[true]}}, defaults: {"optimizeResponse":false} }),
    dataField: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["json"],"@tool":[true]}}, defaults: {"optimizeResponse":false,"responseType":"json"} }),
    fieldsToInclude: resolveSchema({ parameters, schema: z.union([z.literal('all'), z.literal('selected'), z.literal('except'), expressionSchema]), required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["json"],"@tool":[true]}}, defaults: {"optimizeResponse":false,"responseType":"json"} }),
    fields: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["json"],"@tool":[true]},"hide":{"fieldsToInclude":["all"]}}, defaults: {"optimizeResponse":false,"responseType":"json","fieldsToInclude":"all"} }),
    cssSelector: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["html"],"@tool":[true]}}, defaults: {"optimizeResponse":false,"responseType":"json"} }),
    onlyContent: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["html"],"@tool":[true]}}, defaults: {"optimizeResponse":false,"responseType":"json"} }),
    elementsToOmit: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["html"],"onlyContent":[true],"@tool":[true]}}, defaults: {"optimizeResponse":false,"responseType":"json","onlyContent":false} }),
    truncateResponse: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["text","html"],"@tool":[true]}}, defaults: {"optimizeResponse":false,"responseType":"json"} }),
    maxLength: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"optimizeResponse":[true],"responseType":["text","html"],"truncateResponse":[true],"@tool":[true]}}, defaults: {"optimizeResponse":false,"responseType":"json","truncateResponse":false} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};