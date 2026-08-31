/**
 * Microsoft Outlook Node - Version 2 - Zod Schema
 * Discriminator: resource=calendar, operation=create
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
      resource: z.literal('calendar'),
      operation: z.literal('create'),
      name: stringOrExpression.optional(),
      additionalFields: z.object({ calendarGroup: stringOrExpression.optional(), color: z.union([z.literal('lightBlue'), z.literal('lightBrown'), z.literal('lightGray'), z.literal('lightGreen'), z.literal('lightOrange'), z.literal('lightPink'), z.literal('lightRed'), z.literal('lightTeal'), z.literal('lightYellow'), expressionSchema]).optional() }).optional(),
    }).optional(),
  });
};