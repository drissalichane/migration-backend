/**
 * Slack Node - Version 2.4
 * Discriminator: resource=reaction, operation=get
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Get information about a channel */
export type SlackV24ReactionGetParams = {
  resource: 'reaction';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The Slack channel to get the reactions from
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'url'; value: string; cachedResultName?: string };
/**
 * Timestamp of the message to add, get or remove
 */
    timestamp: number | Expression<number>;
};

export type SlackV24ReactionGetOutput = {
  channel?: string;
  message?: {
    blocks?: Array<{
      block_id?: string;
      elements?: Array<{
        elements?: Array<{
          text?: string;
          type?: string;
          url?: string;
        }>;
        type?: string;
      }>;
      type?: string;
    }>;
    client_msg_id?: string;
    permalink?: string;
    reactions?: Array<{
      count?: number;
      name?: string;
      users?: Array<string>;
    }>;
    team?: string;
    text?: string;
    ts?: string;
    type?: string;
    user?: string;
  };
  ok?: boolean;
  type?: string;
};

export type SlackV24ReactionGetNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.4;
  credentials?: Credentials;
  config: NodeConfig<SlackV24ReactionGetParams>;
  output?: Items<SlackV24ReactionGetOutput>;
};