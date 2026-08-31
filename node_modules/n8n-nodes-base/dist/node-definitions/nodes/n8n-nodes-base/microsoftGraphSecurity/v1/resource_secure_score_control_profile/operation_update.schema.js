/**
 * Microsoft Graph Security Node - Version 1 - Zod Schema
 * Discriminator: resource=secureScoreControlProfile, operation=update
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
      resource: z.literal('secureScoreControlProfile'),
      operation: z.literal('update'),
      secureScoreControlProfileId: stringOrExpression.optional(),
      provider: stringOrExpression.optional(),
      vendor: stringOrExpression.optional(),
      updateFields: z.object({ state: z.union([z.literal('Default'), z.literal('Ignored'), z.literal('ThirdParty'), expressionSchema]).optional() }).optional(),
    }).optional(),
  });
};