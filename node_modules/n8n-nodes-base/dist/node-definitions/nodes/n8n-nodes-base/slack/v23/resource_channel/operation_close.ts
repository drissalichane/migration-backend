/**
 * Slack Node - Version 2.3
 * Discriminator: resource=channel, operation=close
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Closes a direct message or multi-person direct message */
export type SlackV23ChannelCloseParams = {
  resource: 'channel';
  operation: 'close';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The Slack channel to close
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
};

export type SlackV23ChannelCloseNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.3;
  credentials?: Credentials;
  config: NodeConfig<SlackV23ChannelCloseParams>;
};