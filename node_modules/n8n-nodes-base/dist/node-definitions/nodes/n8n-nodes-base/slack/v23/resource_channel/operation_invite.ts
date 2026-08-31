/**
 * Slack Node - Version 2.3
 * Discriminator: resource=channel, operation=invite
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Invite a user to a channel */
export type SlackV23ChannelInviteParams = {
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

export type SlackV23ChannelInviteOutput = {
  error?: string;
};

export type SlackV23ChannelInviteNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.3;
  credentials?: Credentials;
  config: NodeConfig<SlackV23ChannelInviteParams>;
  output?: Items<SlackV23ChannelInviteOutput>;
};