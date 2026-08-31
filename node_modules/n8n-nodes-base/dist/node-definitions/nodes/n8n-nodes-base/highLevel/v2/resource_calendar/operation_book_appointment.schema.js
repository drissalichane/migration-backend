/**
 * HighLevel Node - Version 2 - Zod Schema
 * Discriminator: resource=calendar, operation=bookAppointment
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
      operation: z.literal('bookAppointment'),
      calendarId: stringOrExpression.optional(),
      locationId: stringOrExpression.optional(),
      contactId: stringOrExpression.optional(),
      startTime: stringOrExpression.optional(),
      additionalFields: z.object({ endTime: stringOrExpression.optional(), title: stringOrExpression.optional(), appointmentStatus: z.union([z.literal('cancelled'), z.literal('confirmed'), z.literal('invalid'), z.literal('new'), z.literal('noshow'), z.literal('showed'), expressionSchema]).optional(), assignedUserId: stringOrExpression.optional(), address: stringOrExpression.optional(), ignoreDateRange: booleanOrExpression.optional(), toNotify: booleanOrExpression.optional() }).optional(),
      requestOptions: z.object({ batching: z.unknown().optional(), allowUnauthorizedCerts: z.boolean().optional(), proxy: stringOrExpression.optional(), timeout: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};