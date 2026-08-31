/**
 * Slack Node - Version 1
 * Discriminator: resource=user, operation=info
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Get information about a user */
export type SlackV1UserInfoParams = {
  resource: 'user';
  operation: 'info';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The ID of the user to get information about
 */
    user?: string | Expression<string>;
};

export type SlackV1UserInfoNode = {
  type: 'n8n-nodes-base.slack';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SlackV1UserInfoParams>;
};