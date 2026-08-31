/**
 * Slack Node - Version 1 - Zod Schema
 * Discriminator: resource=message, operation=post
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
      resource: z.literal('message').default('message'),
      operation: z.literal('post'),
      authentication: z.union([z.literal('accessToken'), z.literal('oAuth2'), expressionSchema]).optional(),
      channel: stringOrExpression.optional(),
      text: stringOrExpression.optional(),
      jsonParameters: booleanOrExpression.optional(),
      otherOptions: z.object({ icon_emoji: stringOrExpression.optional(), icon_url: stringOrExpression.optional(), link_names: booleanOrExpression.optional(), thread_ts: stringOrExpression.optional(), mrkdwn: booleanOrExpression.optional(), reply_broadcast: booleanOrExpression.optional(), unfurl_links: booleanOrExpression.optional(), unfurl_media: booleanOrExpression.optional(), sendAsUser: stringOrExpression.optional() }).optional(),
      attachments: z.object({ fallback: stringOrExpression.optional(), text: stringOrExpression.optional(), title: stringOrExpression.optional(), title_link: stringOrExpression.optional(), color: stringOrExpression.optional(), pretext: stringOrExpression.optional(), author_name: stringOrExpression.optional(), author_link: stringOrExpression.optional(), author_icon: stringOrExpression.optional(), image_url: stringOrExpression.optional(), thumb_url: stringOrExpression.optional(), footer: stringOrExpression.optional(), footer_icon: stringOrExpression.optional(), ts: stringOrExpression.optional(), fields: z.unknown().optional() }).optional(),
      blocksUi: resolveSchema({ parameters, schema: z.object({ blocksValues: z.array(z.object({ type: z.union([z.literal('actions'), z.literal('section'), expressionSchema]).optional(), blockId: stringOrExpression.optional(), elementsUi: z.unknown().optional(), blockId: stringOrExpression.optional(), textUi: z.unknown().optional(), fieldsUi: z.unknown().optional(), accessoryUi: z.unknown().optional() })).optional() }), required: false, displayOptions: {"show":{"jsonParameters":[false]}}, defaults: {"jsonParameters":false} }),
      attachmentsJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
      blocksJson: resolveSchema({ parameters, schema: z.union([iDataObjectSchema, z.string()]), required: false, displayOptions: {"show":{"jsonParameters":[true]}}, defaults: {"jsonParameters":false} }),
    }).optional(),
  });
};