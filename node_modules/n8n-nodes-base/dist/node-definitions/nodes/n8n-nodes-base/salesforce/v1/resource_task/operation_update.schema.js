/**
 * Salesforce Node - Version 1 - Zod Schema
 * Discriminator: resource=task, operation=update
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
      resource: z.literal('task'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('oAuth2'), z.literal('jwt'), expressionSchema]).optional(),
      taskId: stringOrExpression.optional(),
      updateFields: z.object({ activityDate: stringOrExpression.optional(), callDisposition: stringOrExpression.optional(), callDurationInSeconds: numberOrExpression.optional(), callObject: stringOrExpression.optional(), callType: stringOrExpression.optional(), customFieldsUi: z.unknown().optional(), description: stringOrExpression.optional(), isReminderSet: booleanOrExpression.optional(), owner: stringOrExpression.optional(), priority: stringOrExpression.optional(), status: stringOrExpression.optional(), subject: stringOrExpression.optional(), recurrenceDayOfMonth: numberOrExpression.optional(), recurrenceDayOfWeekMask: numberOrExpression.optional(), recurrenceEndDateOnly: stringOrExpression.optional(), recurrenceInstance: stringOrExpression.optional(), recurrenceInterval: numberOrExpression.optional(), recurrenceMonthOfYear: z.union([z.literal('January'), z.literal('February'), z.literal('March'), z.literal('April'), z.literal('May'), z.literal('June'), z.literal('July'), z.literal('August'), z.literal('September'), z.literal('October'), z.literal('November'), z.literal('December'), expressionSchema]).optional(), recurrenceEndDateOnly: stringOrExpression.optional(), recurrenceRegeneratedType: z.union([z.literal('RecurrenceRegenerateAfterDueDate'), z.literal('RecurrenceRegenerateAfterToday'), z.literal('RecurrenceRegenerated'), expressionSchema]).optional(), recurrenceType: stringOrExpression.optional(), recurrenceTimeZoneSidKey: stringOrExpression.optional(), reminderDateTime: stringOrExpression.optional(), type: stringOrExpression.optional(), whatId: stringOrExpression.optional(), whoId: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};