/**
 * Brevo Node - Version 1 - Zod Schema
 * Discriminator: resource=email, operation=send
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
      resource: z.literal('email').default('email'),
      operation: z.literal('send'),
      sendHTML: booleanOrExpression.optional(),
      subject: stringOrExpression.optional(),
      textContent: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"sendHTML":[false]}}, defaults: {"sendHTML":false} }),
      htmlContent: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"sendHTML":[true]}}, defaults: {"sendHTML":false} }),
      sender: stringOrExpression.optional(),
      receipients: stringOrExpression.optional(),
      additionalFields: z.object({ emailAttachments: z.unknown().optional(), receipientsBCC: z.unknown().optional(), receipientsCC: z.unknown().optional(), emailTags: z.unknown().optional() }).optional(),
      requestOptions: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};