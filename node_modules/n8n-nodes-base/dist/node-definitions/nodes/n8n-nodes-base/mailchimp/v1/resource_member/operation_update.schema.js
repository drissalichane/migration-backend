/**
 * Mailchimp Node - Version 1 - Zod Schema
 * Discriminator: resource=member, operation=update
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
      resource: z.literal('member').default('member'),
      operation: z.literal('update'),
      authentication: z.union([z.literal('apiKey'), z.literal('oAuth2'), expressionSchema]).optional(),
      list: stringOrExpression.optional(),
      email: stringOrExpression.optional(),
      jsonParameters: booleanOrExpression.optional(),
      updateFields: z.object({ emailType: z.union([z.literal('html'), z.literal('text'), expressionSchema]).optional(), groupsUi: z.unknown().optional(), language: stringOrExpression.optional(), mergeFieldsUi: z.unknown().optional(), ipOptIn: stringOrExpression.optional(), ipSignup: stringOrExpression.optional(), timestampSignup: stringOrExpression.optional(), skipMergeValidation: booleanOrExpression.optional(), status: z.union([z.literal('cleaned'), z.literal('pending'), z.literal('subscribed'), z.literal('transactional'), z.literal('unsubscribed'), expressionSchema]).optional(), vip: booleanOrExpression.optional(), locationFieldsUi: z.unknown().optional(), timestampOpt: stringOrExpression.optional() }).optional(),
      mergeFieldsJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      locationJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      groupJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
    }).optional(),
  });
};