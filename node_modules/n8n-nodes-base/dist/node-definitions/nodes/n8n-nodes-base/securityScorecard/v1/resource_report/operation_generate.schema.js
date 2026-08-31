/**
 * SecurityScorecard Node - Version 1 - Zod Schema
 * Discriminator: resource=report, operation=generate
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
      resource: z.literal('report'),
      operation: z.literal('generate'),
      report: z.union([z.literal('detailed'), z.literal('events-json'), z.literal('issues'), z.literal('partnership'), z.literal('summary'), z.literal('full-scorecard-json'), z.literal('portfolio'), z.literal('scorecard-footprint'), expressionSchema]).optional(),
      scorecardIdentifier: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"report":["detailed","events-json","full-scorecard-json","issues","partnership","scorecard-footprint","summary"]}}, defaults: {"report":"detailed"} }),
      portfolioId: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"report":["portfolio"]}}, defaults: {"report":"detailed"} }),
      branding: resolveSchema({ parameters, schema: z.union([z.literal('securityscorecard'), z.literal('company_and_securityscorecard'), z.literal('company'), expressionSchema]), required: false, displayOptions: {"show":{"report":["detailed","summary"]}}, defaults: {"report":"detailed"} }),
      date: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"report":["events-json"]}}, defaults: {"report":"detailed"} }),
      options: resolveSchema({ parameters, schema: z.object({ format: z.union([z.literal('csv'), z.literal('pdf'), expressionSchema]).optional(), countries: stringOrExpression.optional(), ips: stringOrExpression.optional(), subdomains: stringOrExpression.optional() }), required: false, displayOptions: {"show":{"report":["issues","portfolio","scorecard-footprint"]}}, defaults: {"report":"detailed"} }),
    }).optional(),
  });
};