/**
 * Mattermost Node - Version 1
 * Discriminator: resource=channel, operation=create
 */


interface Credentials {
  mattermostApi: CredentialReference;
}

/** Create a new channel */
export type MattermostV1ChannelCreateParams = {
  resource: 'channel';
  operation: 'create';
/**
 * The Mattermost Team. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    teamId?: string | Expression<string>;
/**
 * The non-unique UI name for the channel
 */
    displayName?: string | Expression<string> | PlaceholderValue;
/**
 * The unique handle for the channel, will be present in the channel URL
 */
    channel?: string | Expression<string> | PlaceholderValue;
/**
 * The type of channel to create
 * @default public
 */
    type?: 'private' | 'public' | Expression<string>;
};

export type MattermostV1ChannelCreateNode = {
  type: 'n8n-nodes-base.mattermost';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MattermostV1ChannelCreateParams>;
};