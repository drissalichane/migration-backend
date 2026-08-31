/**
 * Slack Node - Version 2.3 - Zod Schema
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
      select: z.union([z.literal('channel'), z.literal('user'), expressionSchema]).optional(),
      channelId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id'), z.literal('name'), z.literal('url')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"select":["channel"]}}, defaults: {"select":""} }),
      user: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id'), z.literal('username')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"select":["user"]}}, defaults: {"select":""} }),
      messageType: z.union([z.literal('text'), z.literal('block'), z.literal('attachment'), expressionSchema]).optional(),
      text: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"messageType":["text","block"]}}, defaults: {"messageType":"text"} }),
      blocksUi: resolveSchema({ parameters, schema: stringOrExpression, required: false, displayOptions: {"show":{"messageType":["block"]}}, defaults: {"messageType":"text"} }),
      attachments: resolveSchema({ parameters, schema: z.object({ fallback: stringOrExpression.optional(), text: stringOrExpression.optional(), title: stringOrExpression.optional(), title_link: stringOrExpression.optional(), color: stringOrExpression.optional(), pretext: stringOrExpression.optional(), author_name: stringOrExpression.optional(), author_link: stringOrExpression.optional(), author_icon: stringOrExpression.optional(), image_url: stringOrExpression.optional(), thumb_url: stringOrExpression.optional(), footer: stringOrExpression.optional(), footer_icon: stringOrExpression.optional(), ts: numberOrExpression.optional(), fields: z.unknown().optional() }), required: false, displayOptions: {"show":{"messageType":["attachment"]}}, defaults: {"messageType":"text"} }),
      otherOptions: z.object({ includeLinkToWorkflow: booleanOrExpression.optional(), botProfile: z.unknown().optional(), link_names: booleanOrExpression.optional(), thread_ts: z.unknown().optional(), mrkdwn: booleanOrExpression.optional(), unfurl_links: booleanOrExpression.optional(), unfurl_media: booleanOrExpression.optional(), ephemeral: z.unknown().optional(), ephemeral: booleanOrExpression.optional(), sendAsUser: stringOrExpression.optional() }).optional(),
    }).optional(),
  });
};