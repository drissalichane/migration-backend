/**
 * Crypto Node - Version 2 - Zod Validation Schemas
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
    action: z.union([z.literal('generate'), z.literal('hash'), z.literal('hmac'), z.literal('sign'), expressionSchema]).optional(),
    binaryData: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"action":["hash","hmac"]}}, defaults: {"action":"hash"} }),
    binaryPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"action":["hash","hmac"],"binaryData":[true]}}, defaults: {"action":"hash","binaryData":false} }),
    type: resolveSchema({ parameters, schema: z.union([z.literal('MD5'), z.literal('SHA256'), z.literal('SHA3-256'), z.literal('SHA3-384'), z.literal('SHA3-512'), z.literal('SHA384'), z.literal('SHA512'), expressionSchema]), required: false, displayOptions: {"show":{"action":["hash","hmac"]}}, defaults: {"action":"hash"} }),
    value: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"action":["hash","hmac","sign"],"binaryData":[false]}}, defaults: {"action":"hash","binaryData":false} }),
    dataPropertyName: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"action":["hash","hmac","sign","generate"]}}, defaults: {"action":"hash"} }),
    encoding: resolveSchema({ parameters, schema: z.union([z.literal('base64'), z.literal('hex'), expressionSchema]), required: false, displayOptions: {"show":{"action":["hash","hmac","sign"]}}, defaults: {"action":"hash"} }),
    algorithm: resolveSchema({ parameters, schema: z.union([z.literal('RSA-MD5'), z.literal('RSA-RIPEMD160'), z.literal('RSA-SHA1'), z.literal('RSA-SHA1-2'), z.literal('RSA-SHA224'), z.literal('RSA-SHA256'), z.literal('RSA-SHA3-224'), z.literal('RSA-SHA3-256'), z.literal('RSA-SHA3-384'), z.literal('RSA-SHA3-512'), z.literal('RSA-SHA384'), z.literal('RSA-SHA512'), z.literal('RSA-SHA512/224'), z.literal('RSA-SHA512/256'), z.literal('RSA-SM3'), z.literal('blake2b512'), z.literal('blake2s256'), z.literal('id-rsassa-pkcs1-v1_5-with-sha3-224'), z.literal('id-rsassa-pkcs1-v1_5-with-sha3-256'), z.literal('id-rsassa-pkcs1-v1_5-with-sha3-384'), z.literal('id-rsassa-pkcs1-v1_5-with-sha3-512'), z.literal('md5'), z.literal('md5-sha1'), z.literal('md5WithRSAEncryption'), z.literal('ripemd'), z.literal('ripemd160'), z.literal('ripemd160WithRSA'), z.literal('rmd160'), z.literal('sha1'), z.literal('sha1WithRSAEncryption'), z.literal('sha224'), z.literal('sha224WithRSAEncryption'), z.literal('sha256'), z.literal('sha256WithRSAEncryption'), z.literal('sha3-224'), z.literal('sha3-256'), z.literal('sha3-384'), z.literal('sha3-512'), z.literal('sha384'), z.literal('sha384WithRSAEncryption'), z.literal('sha512'), z.literal('sha512-224'), z.literal('sha512-224WithRSAEncryption'), z.literal('sha512-256'), z.literal('sha512-256WithRSAEncryption'), z.literal('sha512WithRSAEncryption'), z.literal('shake128'), z.literal('shake256'), z.literal('sm3'), z.literal('sm3WithRSAEncryption'), z.literal('ssl3-md5'), z.literal('ssl3-sha1'), expressionSchema]), required: false, displayOptions: {"show":{"action":["sign"]}}, defaults: {"action":"hash"} }),
    encodingType: resolveSchema({ parameters, schema: z.union([z.literal('ascii'), z.literal('base64'), z.literal('hex'), z.literal('uuid'), expressionSchema]), required: false, displayOptions: {"show":{"action":["generate"]}}, defaults: {"action":"hash"} }),
    stringLength: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"action":["generate"],"encodingType":["ascii","base64","hex"]}}, defaults: {"action":"hash","encodingType":"uuid"} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};