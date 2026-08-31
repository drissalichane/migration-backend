/**
 * Discord Node - Version 2
 * Discriminator: resource=message, operation=send
 */


interface Credentials {
  discordBotApi: CredentialReference;
  discordOAuth2Api: CredentialReference;
  discordWebhookApi?: CredentialReference;
}

/** Send a message to a channel, thread, or member */
export type DiscordV2MessageSendParams = {
  resource: 'message';
  operation: 'send';
  authentication?: 'botToken' | 'oAuth2' | 'webhook' | Expression<string>;
/**
 * Select the server (guild) that your bot is connected to
 * @displayOptions.show { authentication: ["botToken", "oAuth2"] }
 * @default {"mode":"list","value":""}
 */
    guildId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Send message to a channel or DM to a user
 * @displayOptions.hide { authentication: ["webhook"] }
 * @default channel
 */
    sendTo?: 'user' | 'channel' | Expression<string>;
/**
 * Select the user you want to assign a role to
 * @displayOptions.show { sendTo: ["user"] }
 * @displayOptions.hide { authentication: ["webhook"] }
 * @default {"mode":"list","value":""}
 */
    userId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Select the channel by name, URL, or ID
 * @displayOptions.show { sendTo: ["channel"] }
 * @displayOptions.hide { authentication: ["webhook"] }
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The content of the message (up to 2000 characters)
 * @displayOptions.hide { authentication: ["webhook"] }
 */
    content?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @displayOptions.hide { authentication: ["webhook"] }
 * @default {}
 */
    options?: {
    /** Message flags. &lt;a href="https://discord.com/developers/docs/resources/channel#message-object-message-flags" target="_blank"&gt;More info&lt;/a&gt;.”.
     * @default []
     */
    flags?: Array<'SUPPRESS_EMBEDS' | 'SUPPRESS_NOTIFICATIONS'>;
    /** Fill this to make your message a reply. Add the message ID.
     */
    message_reference?: string | Expression<string> | PlaceholderValue;
    /** Whether to have a bot reading the message directly in the channel
     * @default false
     */
    tts?: boolean | Expression<boolean>;
  };
/**
 * Embeds
 * @displayOptions.hide { authentication: ["webhook"] }
 * @default []
 */
    embeds?: {
        /** Values
     */
    values?: Array<{
      /** Input Method
       * @default fields
       */
      inputMethod?: 'fields' | 'json' | Expression<string>;
      /** Value
       * @displayOptions.show { inputMethod: ["json"] }
       * @default ={}
       */
      json?: IDataObject | string | Expression<string>;
      /** The description of embed
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      description?: string | Expression<string> | PlaceholderValue;
      /** The name of the author
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      author?: string | Expression<string> | PlaceholderValue;
      /** Color code of the embed
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      color?: string | Expression<string>;
      /** The time displayed at the bottom of the embed. Provide in ISO8601 format.
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      timestamp?: string | Expression<string>;
      /** The title of embed
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      title?: string | Expression<string> | PlaceholderValue;
      /** The URL where you want to link the embed to
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      url?: string | Expression<string> | PlaceholderValue;
      /** Source URL of image (only supports http(s) and attachments)
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      image?: string | Expression<string> | PlaceholderValue;
      /** Source URL of thumbnail (only supports http(s) and attachments)
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      thumbnail?: string | Expression<string> | PlaceholderValue;
      /** Source URL of video
       * @displayOptions.show { inputMethod: ["fields"] }
       */
      video?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Files
 * @displayOptions.hide { authentication: ["webhook"] }
 * @default []
 */
    files?: {
        /** Values
     */
    values?: Array<{
      /** The contents of the file being sent with the message
       * @hint The name of the input field containing the binary file data to be sent
       * @default data
       */
      inputFieldName?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type DiscordV2MessageSendOutput = {
  attachments?: Array<{
    content_scan_version?: number;
    content_type?: string;
    filename?: string;
    id?: string;
    proxy_url?: string;
    size?: number;
    title?: string;
    url?: string;
  }>;
  author?: {
    accent_color?: null;
    avatar_decoration_data?: null;
    banner_color?: null;
    bot?: boolean;
    clan?: null;
    collectibles?: null;
    discriminator?: string;
    flags?: number;
    global_name?: null;
    id?: string;
    primary_guild?: null;
    public_flags?: number;
    username?: string;
  };
  channel_id?: string;
  content?: string;
  edited_timestamp?: null;
  embeds?: Array<{
    color?: number;
    content_scan_version?: number;
    description?: string;
    title?: string;
    type?: string;
  }>;
  flags?: number;
  id?: string;
  mention_everyone?: boolean;
  mentions?: Array<{
    avatar_decoration_data?: null;
    clan?: null;
    collectibles?: null;
    discriminator?: string;
    flags?: number;
    id?: string;
    primary_guild?: null;
    public_flags?: number;
    username?: string;
  }>;
  pinned?: boolean;
  timestamp?: string;
  tts?: boolean;
  type?: number;
};

export type DiscordV2MessageSendNode = {
  type: 'n8n-nodes-base.discord';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<DiscordV2MessageSendParams>;
  output?: Items<DiscordV2MessageSendOutput>;
};