/**
 * Paddle Node - Version 1 - Zod Schema
 * Discriminator: resource=coupon, operation=update
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
      resource: z.literal('coupon').default('coupon'),
      operation: z.literal('update'),
      updateBy: resolveSchema({ parameters, schema: z.union([z.literal('couponCode'), z.literal('group'), expressionSchema]), required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
      couponCode: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"updateBy":["couponCode"],"jsonParameters":[false]}}, defaults: {"updateBy":"couponCode","jsonParameters":false} }),
      group: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"updateBy":["group"],"jsonParameters":[false]}}, defaults: {"updateBy":"couponCode","jsonParameters":false} }),
      jsonParameters: booleanOrExpression.optional(),
      additionalFieldsJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      additionalFields: resolveSchema({ parameters, schema: z.object({ allowedUses: numberOrExpression.optional(), discount: z.unknown().optional(), expires: stringOrExpression.optional(), newCouponCode: stringOrExpression.optional(), newGroup: stringOrExpression.optional(), productIds: stringOrExpression.optional(), recurring: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
    }).optional(),
  });
};