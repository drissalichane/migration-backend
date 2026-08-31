/**
 * QuickBooks Online Node - Version 1 - Zod Schema
 * Discriminator: resource=employee, operation=update
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
      resource: z.literal('employee'),
      operation: z.literal('update'),
      employeeId: stringOrExpression.optional(),
      updateFields: z.object({ Active: booleanOrExpression.optional(), BillableTime: booleanOrExpression.optional(), DisplayName: stringOrExpression.optional(), BillAddr: z.unknown().optional(), PrimaryPhone: stringOrExpression.optional(), PrintOnCheckName: stringOrExpression.optional(), SSN: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};