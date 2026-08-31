/**
 * Slack Node - Version 2.1
 * Discriminator: resource=channel, operation=leave
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Leaves a conversation */
export type SlackV21ChannelLeaveParams = {
  resource: 'channel';
  operation: 'leave';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The Slack channel to leave from
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
};

export type SlackV21ChannelLeaveNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<SlackV21ChannelLeaveParams>;
};