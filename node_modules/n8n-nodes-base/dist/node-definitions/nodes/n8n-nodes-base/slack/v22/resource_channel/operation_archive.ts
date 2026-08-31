/**
 * Slack Node - Version 2.2
 * Discriminator: resource=channel, operation=archive
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Archives a conversation */
export type SlackV22ChannelArchiveParams = {
  resource: 'channel';
  operation: 'archive';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The Slack channel to archive
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
};

export type SlackV22ChannelArchiveNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<SlackV22ChannelArchiveParams>;
};