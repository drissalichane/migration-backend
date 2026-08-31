/**
 * Google Analytics Node - Version 1 - Zod Schema
 * Discriminator: resource=report, operation=get
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
      resource: z.literal('report').default('report'),
      operation: z.literal('get').default('get'),
      viewId: stringOrExpression.optional(),
      returnAll: booleanOrExpression.optional(),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"returnAll":[false]}}, defaults: {"returnAll":false} }),
      simple: booleanOrExpression.optional(),
      additionalFields: z.object({ dateRangesUi: z.unknown().optional(), dimensionUi: z.unknown().optional(), dimensionFiltersUi: z.unknown().optional(), hideTotals: booleanOrExpression.optional(), hideValueRanges: booleanOrExpression.optional(), includeEmptyRows: booleanOrExpression.optional(), metricsUi: z.unknown().optional(), useResourceQuotas: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};