/**
 * Slack Node - Version 1
 * Discriminator: resource=file, operation=get
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

/** Get information about a channel */
export type SlackV1FileGetParams = {
  resource: 'file';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * File ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
};

export type SlackV1FileGetNode = {
  type: 'n8n-nodes-base.slack';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SlackV1FileGetParams>;
};