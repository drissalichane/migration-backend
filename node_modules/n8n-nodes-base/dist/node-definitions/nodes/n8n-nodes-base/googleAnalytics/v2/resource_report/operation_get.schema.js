/**
 * Google Analytics Node - Version 2 - Zod Schema
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
      propertyType: z.union([z.literal('ga4'), z.literal('universal')]).optional(),
      propertyId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"propertyType":["ga4"]}}, defaults: {"propertyType":"ga4"} }),
      dateRange: resolveSchema({ parameters, schema: z.union([z.literal('last7days'), z.literal('last30days'), z.literal('today'), z.literal('yesterday'), z.literal('lastCalendarWeek'), z.literal('lastCalendarMonth'), z.literal('custom'), expressionSchema]), required: false, displayOptions: {"show":{"propertyType":["ga4","universal"]}}, defaults: {"propertyType":"ga4"} }),
      startDate: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"dateRange":["custom"],"propertyType":["ga4","universal"]}}, defaults: {"dateRange":"last7days","propertyType":"ga4"} }),
      endDate: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"dateRange":["custom"],"propertyType":["ga4","universal"]}}, defaults: {"dateRange":"last7days","propertyType":"ga4"} }),
      metricsGA4: resolveSchema({ parameters, schema: z.object({ metricValues: z.array(z.object({ listName: z.union([z.literal('active1DayUsers'), z.literal('active28DayUsers'), z.literal('active7DayUsers'), z.literal('checkouts'), z.literal('eventCount'), z.literal('screenPageViews'), z.literal('userEngagementDuration'), z.literal('sessions'), z.literal('sessionsPerUser'), z.literal('totalUsers'), z.literal('other'), z.literal('custom'), expressionSchema]).optional(), name: stringOrExpression.optional(), name: stringOrExpression.optional(), expression: stringOrExpression.optional(), invisible: booleanOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"propertyType":["ga4"]}}, defaults: {"propertyType":"ga4"} }),
      dimensionsGA4: resolveSchema({ parameters, schema: z.object({ dimensionValues: z.array(z.object({ listName: z.union([z.literal('browser'), z.literal('campaignName'), z.literal('city'), z.literal('country'), z.literal('date'), z.literal('deviceCategory'), z.literal('itemName'), z.literal('language'), z.literal('pageLocation'), z.literal('sourceMedium'), z.literal('other'), expressionSchema]).optional(), name: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"propertyType":["ga4"]}}, defaults: {"propertyType":"ga4"} }),
      returnAll: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"propertyType":["ga4","universal"]}}, defaults: {"propertyType":"ga4"} }),
      limit: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"propertyType":["ga4","universal"],"returnAll":[false]}}, defaults: {"propertyType":"ga4","returnAll":false} }),
      simple: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"propertyType":["ga4","universal"]}}, defaults: {"propertyType":"ga4"} }),
      additionalFields: resolveSchema({ parameters, schema: z.object({ currencyCode: stringOrExpression.optional(), dimensionFiltersUI: z.unknown().optional(), metricAggregations: z.array(z.union([z.literal('MAXIMUM'), z.literal('MINIMUM'), z.literal('TOTAL')])).optional(), metricsFiltersUI: z.unknown().optional(), keepEmptyRows: booleanOrExpression.optional(), orderByUI: z.unknown().optional(), returnPropertyQuota: booleanOrExpression.optional(), dimensionFiltersUi: z.unknown().optional(), hideTotals: booleanOrExpression.optional(), hideValueRanges: booleanOrExpression.optional(), includeEmptyRows: booleanOrExpression.optional(), useResourceQuotas: booleanOrExpression.optional() }), required: false, displayOptions: {"show":{"propertyType":["ga4","universal"]}}, defaults: {"propertyType":"ga4"} }),
      viewId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('url'), z.literal('id')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"propertyType":["universal"]}}, defaults: {"propertyType":"ga4"} }),
      metricsUA: resolveSchema({ parameters, schema: z.object({ metricValues: z.array(z.object({ listName: z.union([z.literal('ga:productCheckouts'), z.literal('ga:totalEvents'), z.literal('ga:pageviews'), z.literal('ga:sessionDuration'), z.literal('ga:sessions'), z.literal('ga:sessionsPerUser'), z.literal('ga:users'), z.literal('other'), z.literal('custom'), expressionSchema]).optional(), name: stringOrExpression.optional(), name: stringOrExpression.optional(), expression: stringOrExpression.optional(), formattingType: z.union([z.literal('CURRENCY'), z.literal('FLOAT'), z.literal('INTEGER'), z.literal('PERCENT'), z.literal('TIME'), expressionSchema]).optional() })).optional() }), required: false, displayOptions: {"show":{"propertyType":["universal"]}}, defaults: {"propertyType":"ga4"} }),
      dimensionsUA: resolveSchema({ parameters, schema: z.object({ dimensionValues: z.array(z.object({ listName: z.union([z.literal('ga:browser'), z.literal('ga:campaign'), z.literal('ga:city'), z.literal('ga:country'), z.literal('ga:date'), z.literal('ga:deviceCategory'), z.literal('ga:productName'), z.literal('ga:language'), z.literal('ga:pagePath'), z.literal('ga:sourceMedium'), z.literal('other'), expressionSchema]).optional(), name: stringOrExpression.optional() })).optional() }), required: false, displayOptions: {"show":{"propertyType":["universal"]}}, defaults: {"propertyType":"ga4"} }),
    }).optional(),
  });
};