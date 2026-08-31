/**
 * Shopify Node - Version 1 - Zod Schema
 * Discriminator: resource=order, operation=update
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
      resource: z.literal('order').default('order'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), z.literal('apiKey'), expressionSchema]).optional(),
      orderId: stringOrExpression.optional(),
      updateFields: z.object({ email: stringOrExpression.optional(), locationId: stringOrExpression.optional(), note: stringOrExpression.optional(), shippingAddressUi: z.unknown().optional(), sourceName: stringOrExpression.optional(), tags: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};