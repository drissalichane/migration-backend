/**
 * Slack Node - Version 2.4
 * Discriminator: resource=message, operation=getPermalink
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

export type SlackV24MessageGetPermalinkParams = {
  resource: 'message';
  operation: 'getPermalink';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The Slack channel to get the message permalink from
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
/**
 * Timestamp of the message to message
 */
    timestamp: number | Expression<number>;
};

export type SlackV24MessageGetPermalinkOutput = {
  channel?: string;
  ok?: boolean;
  permalink?: string;
};

export type SlackV24MessageGetPermalinkNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.4;
  credentials?: Credentials;
  config: NodeConfig<SlackV24MessageGetPermalinkParams>;
  output?: Items<SlackV24MessageGetPermalinkOutput>;
};