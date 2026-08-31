/**
 * Magento 2 Node - Version 1 - Zod Schema
 * Discriminator: resource=customer, operation=create
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
      resource: z.literal('customer').default('customer'),
      operation: z.literal('create').default('create'),
      email: stringOrExpression.optional(),
      firstname: stringOrExpression.optional(),
      lastname: stringOrExpression.optional(),
      additionalFields: z.object({ addresses: z.unknown().optional(), amazon_id: stringOrExpression.optional(), confirmation: stringOrExpression.optional(), customAttributes: z.unknown().optional(), dob: stringOrExpression.optional(), default_billing: stringOrExpression.optional(), default_shipping: stringOrExpression.optional(), gender: z.union([z.literal(1), z.literal(2), z.literal(3), expressionSchema]).optional(), group_id: stringOrExpression.optional(), is_subscribed: booleanOrExpression.optional(), middlename: stringOrExpression.optional(), password: stringOrExpression.optional(), prefix: stringOrExpression.optional(), store_id: stringOrExpression.optional(), suffix: stringOrExpression.optional(), vertex_customer_code: stringOrExpression.optional(), vertex_customer_country: stringOrExpression.optional(), website_id: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};