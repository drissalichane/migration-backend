/**
 * Onfleet Node - Version 1 - Zod Schema
 * Discriminator: resource=team, operation=getTimeEstimates
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
      resource: z.literal('team'),
      operation: z.literal('getTimeEstimates'),
      id: stringOrExpression.optional(),
      filters: z.object({ dropOff: z.unknown().optional(), pickUp: z.unknown().optional(), restrictedVehicleTypes: z.union([z.literal('CAR'), z.literal('MOTORCYCLE'), z.literal('BICYCLE'), z.literal('TRUCK'), expressionSchema]).optional(), serviceTime: numberOrExpression.optional() }).optional(),
    }).optional(),
  });
};