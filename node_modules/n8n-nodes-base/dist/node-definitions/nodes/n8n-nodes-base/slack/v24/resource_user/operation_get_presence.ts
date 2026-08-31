/**
 * Slack Node - Version 2.4
 * Discriminator: resource=user, operation=getPresence
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Get online status of a user */
export type SlackV24UserGetPresenceParams = {
  resource: 'user';
  operation: 'getPresence';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the user to get the online status of
 * @default {"mode":"list","value":""}
 */
    user?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type SlackV24UserGetPresenceOutput = {
  ok?: boolean;
  presence?: string;
};

export type SlackV24UserGetPresenceNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.4;
  credentials?: Credentials;
  config: NodeConfig<SlackV24UserGetPresenceParams>;
  output?: Items<SlackV24UserGetPresenceOutput>;
};