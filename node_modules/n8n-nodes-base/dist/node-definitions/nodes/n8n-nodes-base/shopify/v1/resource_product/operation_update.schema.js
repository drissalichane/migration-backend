/**
 * Shopify Node - Version 1 - Zod Schema
 * Discriminator: resource=product, operation=update
 *
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema }) {

  return z.object({
    parameters: z.object({
      resource: z.literal('product'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), z.literal('apiKey'), expressionSchema]).optional(),
      productId: stringOrExpression.optional(),
      updateFields: z.object({ body_html: stringOrExpression.optional(), handle: stringOrExpression.optional(), images: z.unknown().optional(), productOptions: z.unknown().optional(), product_type: stringOrExpression.optional(), published_at: stringOrExpression.optional(), published_scope: z.union([z.literal('global'), z.literal('web'), expressionSchema]).optional(), tags: stringOrExpression.optional(), template_suffix: stringOrExpression.optional(), title: stringOrExpression.optional(), vendor: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};