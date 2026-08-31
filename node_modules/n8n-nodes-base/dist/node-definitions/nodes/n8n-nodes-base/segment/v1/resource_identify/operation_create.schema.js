/**
 * Segment Node - Version 1 - Zod Schema
 * Discriminator: resource=identify, operation=create
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
      resource: z.literal('identify').default('identify'),
      operation: z.literal('create'),
      userId: stringOrExpression.optional(),
      traits: z.object({ traitsUi: z.array(z.object({ key: stringOrExpression.optional(), value: stringOrExpression.optional() })).optional() }).optional(),
      context: z.object({ contextUi: z.object({ active: booleanOrExpression.optional(), ip: stringOrExpression.optional(), locate: stringOrExpression.optional(), page: stringOrExpression.optional(), timezone: stringOrExpression.optional(), app: z.unknown().optional(), campaign: z.unknown().optional(), device: z.unknown().optional() }).optional() }).optional(),
      integrations: z.object({ integrationsUi: z.object({ all: booleanOrExpression.optional(), salesforce: booleanOrExpression.optional() }).optional() }).optional(),
    }).optional(),
  });
};