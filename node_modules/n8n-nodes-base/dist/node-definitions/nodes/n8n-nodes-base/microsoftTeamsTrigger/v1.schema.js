/**
 * Microsoft Teams Trigger Node - Version 1 - Zod Validation Schemas
 *
 * These schemas validate node configuration at runtime.
 * Use .parse() for strict validation or .safeParse() for error handling.
 *
 * Schema helpers (z, expressionSchema, etc.) are passed as parameters
 * by the schema-validator, not imported from external files.
 *
 * @generated - CommonJS JavaScript for runtime loading
 */

module.exports = function getSchema({ parameters, z, expressionSchema, stringOrExpression, numberOrExpression, booleanOrExpression, resourceLocatorValueSchema, resourceMapperValueSchema, filterValueSchema, assignmentCollectionValueSchema, iDataObjectSchema, resolveSchema }) {

  // Parameters schema
  const parametersSchema = z.object({
    event: z.union([z.literal('newChannel'), z.literal('newChannelMessage'), z.literal('newChat'), z.literal('newChatMessage'), z.literal('newTeamMember'), expressionSchema]).optional(),
    watchAllTeams: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"event":["newChannel","newChannelMessage","newTeamMember"]}}, defaults: {"event":"newChannelMessage"} }),
    teamId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id'), z.literal('url')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"event":["newChannel","newChannelMessage","newTeamMember"],"watchAllTeams":[false]}}, defaults: {"event":"newChannelMessage","watchAllTeams":false} }),
    watchAllChannels: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"event":["newChannelMessage"],"watchAllTeams":[false]}}, defaults: {"event":"newChannelMessage","watchAllTeams":false} }),
    channelId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id'), z.literal('url')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"event":["newChannelMessage"],"watchAllTeams":[false],"watchAllChannels":[false]}}, defaults: {"event":"newChannelMessage","watchAllTeams":false,"watchAllChannels":false} }),
    watchAllChats: resolveSchema({ parameters, schema: booleanOrExpression, required: false, displayOptions: {"show":{"event":["newChatMessage"]}}, defaults: {"event":"newChannelMessage"} }),
    chatId: resolveSchema({ parameters, schema: z.union([z.object({ __rl: z.literal(true), mode: z.union([z.literal('list'), z.literal('id'), z.literal('url')]), value: z.union([z.string(), z.number()]), cachedResultName: z.string().optional(), cachedResultUrl: z.string().optional() }), expressionSchema]), required: false, displayOptions: {"show":{"event":["newChatMessage"],"watchAllChats":[false]}}, defaults: {"event":"newChannelMessage","watchAllChats":false} }),
  });

  // Return combined config schema
  return z.object({
    parameters: parametersSchema.optional(),
  });
};