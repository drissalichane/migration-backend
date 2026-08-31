/**
 * Discord Node - Version 2
 * Discriminator: resource=message, operation=react
 */


interface Credentials {
  discordBotApi: CredentialReference;
  discordOAuth2Api: CredentialReference;
  discordWebhookApi?: CredentialReference;
}

/** React to a message with an emoji */
export type DiscordV2MessageReactParams = {
  resource: 'message';
  operation: 'react';
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
/**
 * The emoji you want to react with
 * @displayOptions.hide { authentication: ["webhook"] }
 */
    emoji?: string | Expression<string> | PlaceholderValue;
};

export type DiscordV2MessageReactOutput = {
  success?: boolean;
};

export type DiscordV2MessageReactNode = {
  type: 'n8n-nodes-base.discord';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<DiscordV2MessageReactParams>;
  output?: Items<DiscordV2MessageReactOutput>;
};