/**
 * Mattermost Node - Version 1 - Zod Schema
 * Discriminator: resource=message, operation=post
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
      resource: z.literal('message').default('message'),
      operation: z.literal('post'),
      channelId: stringOrExpression.optional(),
      message: stringOrExpression.optional(),
      attachments: z.object({ actions: z.unknown().optional(), author_icon: stringOrExpression.optional(), author_link: stringOrExpression.optional(), author_name: stringOrExpression.optional(), color: stringOrExpression.optional(), fallback: stringOrExpression.optional(), fields: z.unknown().optional(), footer: stringOrExpression.optional(), footer_icon: stringOrExpression.optional(), image_url: stringOrExpression.optional(), pretext: stringOrExpression.optional(), text: stringOrExpression.optional(), thumb_url: stringOrExpression.optional(), title: stringOrExpression.optional(), title_link: stringOrExpression.optional() }).optional(),
      otherOptions: z.object({ root_id: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};