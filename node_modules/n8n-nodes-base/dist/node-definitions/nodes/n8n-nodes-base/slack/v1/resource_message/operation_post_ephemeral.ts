/**
 * Slack Node - Version 1
 * Discriminator: resource=message, operation=postEphemeral
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Post an ephemeral message to a user in channel */
export type SlackV1MessagePostEphemeralParams = {
  resource: 'message';
  operation: 'postEphemeral';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The channel to send the message to
 */
    channel?: string | Expression<string> | PlaceholderValue;
/**
 * The user ID to send the message to
 */
    user?: string | Expression<string> | PlaceholderValue;
/**
 * The text to send
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Other options to set
 * @default {}
 */
    otherOptions?: {
    /** Emoji to use as the icon for this message. Overrides icon_url.
     */
    icon_emoji?: string | Expression<string> | PlaceholderValue;
    /** URL to an image to use as the icon for this message
     */
    icon_url?: string | Expression<string> | PlaceholderValue;
    /** Whether to find and link channel names and usernames
     * @default false
     */
    link_names?: boolean | Expression<boolean>;
    /** Provide another message's ts value to make this message a reply
     */
    thread_ts?: string | Expression<string> | PlaceholderValue;
    /** Whether to use Slack Markdown parsing
     * @default true
     */
    mrkdwn?: boolean | Expression<boolean>;
    /** Whether the reply should be made visible to everyone in the channel or conversation. Use in conjunction with thread_ts.
     * @default false
     */
    reply_broadcast?: boolean | Expression<boolean>;
    /** Whether to enable unfurling of primarily text-based content
     * @default false
     */
    unfurl_links?: boolean | Expression<boolean>;
    /** Whether to disable unfurling of media content
     * @default true
     */
    unfurl_media?: boolean | Expression<boolean>;
    /** The message will be sent from this username (i.e. as if this individual sent the message).
     * @displayOptions.show { /authentication: ["accessToken"] }
     */
    sendAsUser?: string | Expression<string> | PlaceholderValue;
  };
/**
 * The attachment to add
 * @default {}
 */
    attachments?: {
    /** Required plain-text summary of the attachment
     */
    fallback?: string | Expression<string> | PlaceholderValue;
    /** Text to send
     */
    text?: string | Expression<string> | PlaceholderValue;
    /** Title of the message
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Link of the title
     */
    title_link?: string | Expression<string> | PlaceholderValue;
    /** Color of the line left of text
     * @default #ff0000
     */
    color?: string | Expression<string>;
    /** Text which appears before the message block
     */
    pretext?: string | Expression<string> | PlaceholderValue;
    /** Name that should appear
     */
    author_name?: string | Expression<string> | PlaceholderValue;
    /** Link for the author
     */
    author_link?: string | Expression<string> | PlaceholderValue;
    /** Icon which should appear for the user
     */
    author_icon?: string | Expression<string> | PlaceholderValue;
    /** URL of image
     */
    image_url?: string | Expression<string> | PlaceholderValue;
    /** URL of thumbnail
     */
    thumb_url?: string | Expression<string> | PlaceholderValue;
    /** Text of footer to add
     */
    footer?: string | Expression<string> | PlaceholderValue;
    /** Icon which should appear next to footer
     */
    footer_icon?: string | Expression<string> | PlaceholderValue;
    /** Time message relates to
     */
    ts?: string | Expression<string>;
    /** Fields to add to message
     * @default {}
     */
    fields?: {
        /** Item
     */
    item?: Array<{
      /** Title of the item
       */
      title?: string | Expression<string> | PlaceholderValue;
      /** Value of the item
       */
      value?: string | Expression<string> | PlaceholderValue;
      /** Whether items can be displayed next to each other
       * @default true
       */
      short?: boolean | Expression<boolean>;
    }>;
  };
  };
};

export type SlackV1MessagePostEphemeralNode = {
  type: 'n8n-nodes-base.slack';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SlackV1MessagePostEphemeralParams>;
};