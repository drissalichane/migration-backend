/**
 * Slack Node - Version 1
 * Discriminator: resource=star, operation=add
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Add a star to an item */
export type SlackV1StarAddParams = {
  resource: 'star';
  operation: 'add';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Options to set
 * @default {}
 */
    options?: {
    /** Channel to add star to, or channel where the message to add star to was posted (used with timestamp). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    channelId?: string | Expression<string>;
    /** File comment to add star to
     */
    fileComment?: string | Expression<string> | PlaceholderValue;
    /** File to add star to
     */
    fileId?: string | Expression<string> | PlaceholderValue;
    /** Timestamp of the message to add star to
     */
    timestamp?: string | Expression<string> | PlaceholderValue;
  };
};

export type SlackV1StarAddNode = {
  type: 'n8n-nodes-base.slack';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SlackV1StarAddParams>;
};