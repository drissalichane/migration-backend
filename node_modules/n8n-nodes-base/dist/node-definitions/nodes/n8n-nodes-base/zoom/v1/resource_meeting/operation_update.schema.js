/**
 * Zoom Node - Version 1 - Zod Schema
 * Discriminator: resource=meeting, operation=update
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
      resource: z.literal('meeting').default('meeting'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      meetingId: stringOrExpression.optional(),
      updateFields: z.object({ agenda: stringOrExpression.optional(), duration: numberOrExpression.optional(), password: stringOrExpression.optional(), scheduleFor: stringOrExpression.optional(), settings: z.unknown().optional(), startTime: stringOrExpression.optional(), timeZone: stringOrExpression.optional(), topic: stringOrExpression.optional(), type: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(8), expressionSchema]).optional() }).optional(),
    }).optional(),
  });
};