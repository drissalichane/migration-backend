/**
 * WooCommerce Node - Version 1 - Zod Schema
 * Discriminator: resource=customer, operation=update
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
      resource: z.literal('customer'),
      operation: z.literal('update'),
      customerId: stringOrExpression.optional(),
      updateFields: z.object({ billing: z.unknown().optional(), first_name: stringOrExpression.optional(), last_name: stringOrExpression.optional(), meta_data: z.unknown().optional(), password: stringOrExpression.optional(), shipping: z.unknown().optional() }).optional(),
    }).optional(),
  });
};