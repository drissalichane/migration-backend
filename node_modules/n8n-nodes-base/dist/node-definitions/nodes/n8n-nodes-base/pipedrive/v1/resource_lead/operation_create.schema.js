/**
 * Pipedrive Node - Version 1 - Zod Schema
 * Discriminator: resource=lead, operation=create
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
      resource: z.literal('lead'),
      operation: z.literal('create').default('create'),
      authentication: z.union([z.literal('apiToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      title: stringOrExpression.optional(),
      associateWith: z.union([z.literal('organization'), z.literal('person'), expressionSchema]).optional(),
      organization_id: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"associateWith":["organization"]}}, defaults: {"associateWith":"organization"} }),
      person_id: resolveSchema({ parameters, schema: numberOrExpression, required: false, displayOptions: {"show":{"associateWith":["person"]}}, defaults: {"associateWith":"organization"} }),
      additionalFields: z.object({ expected_close_date: stringOrExpression.optional(), label_ids: z.array(z.string()).optional(), organization_id: numberOrExpression.optional(), owner_id: stringOrExpression.optional(), person_id: numberOrExpression.optional(), value: z.unknown().optional() }).optional(),
    }).optional(),
  });
};