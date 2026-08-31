/**
 * Slack Node - Version 2.2
 * Discriminator: resource=message, operation=getPermalink
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

export type SlackV22MessageGetPermalinkParams = {
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

export type SlackV22MessageGetPermalinkOutput = {
  channel?: string;
  ok?: boolean;
  permalink?: string;
};

export type SlackV22MessageGetPermalinkNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<SlackV22MessageGetPermalinkParams>;
  output?: Items<SlackV22MessageGetPermalinkOutput>;
};