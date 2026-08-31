/**
 * Nextcloud Node - Version 1
 * Discriminator: resource=user, operation=delete
 */


interface Credentials {
  nextCloudApi: CredentialReference;
  nextCloudOAuth2Api: CredentialReference;
}

/** Delete a file */
export type NextCloudV1UserDeleteParams = {
  resource: 'user';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Username the user will have
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type NextCloudV1UserDeleteNode = {
  type: 'n8n-nodes-base.nextCloud';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NextCloudV1UserDeleteParams>;
};