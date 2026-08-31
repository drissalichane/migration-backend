/**
 * Slack Node - Version 1
 * Discriminator: resource=message, operation=update
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Updates a message */
export type SlackV1MessageUpdateParams = {
  resource: 'message';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Channel containing the message to be updated. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    channelId?: string | Expression<string>;
/**
 * New text for the message, using the default formatting rules. It's not required when presenting attachments.
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * Timestamp of the message to be updated
 */
    ts?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Whether to find and link channel names and usernames
     * @default false
     */
    link_names?: boolean | Expression<boolean>;
    /** Change how messages are treated
     * @default client
     */
    parse?: 'client' | 'full' | 'none' | Expression<string>;
  };
/**
 * The attachments to add
 * @displayOptions.show { jsonParameters: [true] }
 */
    attachmentsJson?: IDataObject | string | Expression<string>;
/**
 * The blocks to add
 * @displayOptions.show { jsonParameters: [true] }
 */
    blocksJson?: IDataObject | string | Expression<string>;
/**
 * The attachment to add
 * @displayOptions.show { jsonParameters: [false] }
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

export type SlackV1MessageUpdateNode = {
  type: 'n8n-nodes-base.slack';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SlackV1MessageUpdateParams>;
};