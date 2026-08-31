/**
 * Slack Node - Version 1
 * Discriminator: resource=reaction, operation=remove
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Remove a reaction of a message */
export type SlackV1ReactionRemoveParams = {
  resource: 'reaction';
  operation: 'remove';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Channel containing the message. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    channelId?: string | Expression<string>;
/**
 * Name of emoji
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Timestamp of the message
 */
    timestamp?: string | Expression<string> | PlaceholderValue;
};

export type SlackV1ReactionRemoveNode = {
  type: 'n8n-nodes-base.slack';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SlackV1ReactionRemoveParams>;
};