/**
 * Slack Node - Version 2.4
 * Discriminator: resource=channel, operation=archive
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Archives a conversation */
export type SlackV24ChannelArchiveParams = {
  resource: 'channel';
  operation: 'archive';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The Slack channel to archive
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
};

export type SlackV24ChannelArchiveNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.4;
  credentials?: Credentials;
  config: NodeConfig<SlackV24ChannelArchiveParams>;
};