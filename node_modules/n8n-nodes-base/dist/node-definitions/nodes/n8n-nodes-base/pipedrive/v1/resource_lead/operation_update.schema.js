/**
 * Pipedrive Node - Version 1 - Zod Schema
 * Discriminator: resource=lead, operation=update
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
      resource: z.literal('lead'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('apiToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      leadId: stringOrExpression.optional(),
      updateFields: z.object({ title: stringOrExpression.optional(), owner_id: stringOrExpression.optional(), label_ids: z.array(z.string()).optional(), person_id: stringOrExpression.optional(), value: z.unknown().optional(), expected_close_date: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};