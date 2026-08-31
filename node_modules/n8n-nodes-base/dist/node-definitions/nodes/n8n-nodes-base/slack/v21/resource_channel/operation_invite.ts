/**
 * Slack Node - Version 2.1
 * Discriminator: resource=channel, operation=invite
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Invite a user to a channel */
export type SlackV21ChannelInviteParams = {
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

export type SlackV21ChannelInviteOutput = {
  error?: string;
};

export type SlackV21ChannelInviteNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<SlackV21ChannelInviteParams>;
  output?: Items<SlackV21ChannelInviteOutput>;
};