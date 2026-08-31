/**
 * Slack Node - Version 2
 * Discriminator: resource=user, operation=getPresence
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Get online status of a user */
export type SlackV2UserGetPresenceParams = {
  resource: 'user';
  operation: 'getPresence';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the user to get the online status of
 * @default {"mode":"list","value":""}
 */
    user?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type SlackV2UserGetPresenceOutput = {
  ok?: boolean;
  presence?: string;
};

export type SlackV2UserGetPresenceNode = {
  type: 'n8n-nodes-base.slack';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SlackV2UserGetPresenceParams>;
  output?: Items<SlackV2UserGetPresenceOutput>;
};