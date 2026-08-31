/**
 * Slack Node - Version 2
 * Discriminator: resource=channel, operation=invite
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Invite a user to a channel */
export type SlackV2ChannelInviteParams = {
  resource: 'channel';
  operation: 'invite';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The Slack channel to invite to
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
/**
 * The ID of the user to invite into channel. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    userIds?: string[];
};

export type SlackV2ChannelInviteOutput = {
  error?: string;
};

export type SlackV2ChannelInviteNode = {
  type: 'n8n-nodes-base.slack';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SlackV2ChannelInviteParams>;
  output?: Items<SlackV2ChannelInviteOutput>;
};