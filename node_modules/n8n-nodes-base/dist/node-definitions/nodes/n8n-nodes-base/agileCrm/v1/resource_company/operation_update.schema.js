/**
 * Agile CRM Node - Version 1 - Zod Schema
 * Discriminator: resource=company, operation=update
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
      resource: z.literal('company'),
      operation: z.literal('update'),
      companyId: stringOrExpression.optional(),
      jsonParameters: booleanOrExpression.optional(),
      additionalFieldsJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      additionalFields: resolveSchema({ parameters, schema: z.object({ addressOptions: z.unknown().optional(), email: stringOrExpression.optional(), starValue: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), expressionSchema]).optional(), tags: stringOrExpression.optional(), name: stringOrExpression.optional(), phone: stringOrExpression.optional(), websiteOptions: z.unknown().optional(), customProperties: z.unknown().optional() }), required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
    }).optional(),
  });
};