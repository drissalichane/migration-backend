/**
 * Line Node - Version 1 - Zod Schema
 * Discriminator: resource=notification, operation=send
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
      resource: z.literal('notification').default('notification'),
      operation: z.literal('send').default('send'),
      message: stringOrExpression.optional(),
      additionalFields: z.object({ imageUi: z.unknown().optional(), notificationDisabled: booleanOrExpression.optional(), stickerUi: z.unknown().optional() }).optional(),
    }).optional(),
  });
};