/**
 * Freshdesk Node - Version 1 - Zod Schema
 * Discriminator: resource=contact, operation=create
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
      resource: z.literal('contact'),
      operation: z.literal('create').default('create'),
      name: stringOrExpression.optional(),
      email: stringOrExpression.optional(),
      additionalFields: z.object({ address: stringOrExpression.optional(), company_id: numberOrExpression.optional(), customFields: z.unknown().optional(), description: stringOrExpression.optional(), email: stringOrExpression.optional(), job_title: stringOrExpression.optional(), language: stringOrExpression.optional(), mobile: stringOrExpression.optional(), name: stringOrExpression.optional(), other_companies: stringOrExpression.optional(), other_emails: stringOrExpression.optional(), phone: stringOrExpression.optional(), tags: stringOrExpression.optional(), time_zone: stringOrExpression.optional(), twitter_id: stringOrExpression.optional(), unique_external_id: stringOrExpression.optional(), view_all_tickets: booleanOrExpression.optional() }).optional(),
    }).optional(),
  });
};