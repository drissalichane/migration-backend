/**
 * Discord Node - Version 2
 * Discriminator: resource=message, operation=deleteMessage
 */


interface Credentials {
  discordBotApi: CredentialReference;
  discordOAuth2Api: CredentialReference;
  discordWebhookApi?: CredentialReference;
}

/** Delete a message in a channel */
export type DiscordV2MessageDeleteMessageParams = {
  resource: 'message';
  operation: 'deleteMessage';
  authentication?: 'botToken' | 'oAuth2' | 'webhook' | Expression<string>;
/**
 * Select the server (guild) that your bot is connected to
 * @displayOptions.show { authentication: ["botToken", "oAuth2"] }
 * @default {"mode":"list","value":""}
 */
    guildId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Select the channel by name, URL, or ID
 * @displayOptions.hide { authentication: ["webhook"] }
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The ID of the message
 * @displayOptions.hide { authentication: ["webhook"] }
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type DiscordV2MessageDeleteMessageOutput = {
  success?: boolean;
};

export type DiscordV2MessageDeleteMessageNode = {
  type: 'n8n-nodes-base.discord';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<DiscordV2MessageDeleteMessageParams>;
  output?: Items<DiscordV2MessageDeleteMessageOutput>;
};