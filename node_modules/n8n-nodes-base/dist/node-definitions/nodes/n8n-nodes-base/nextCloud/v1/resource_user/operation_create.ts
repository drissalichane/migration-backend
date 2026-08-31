/**
 * Nextcloud Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  nextCloudApi: CredentialReference;
  nextCloudOAuth2Api: CredentialReference;
}

/** Create a folder */
export type NextCloudV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Username the user will have
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * The email of the user to invite
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The display name of the user to invite
     */
    displayName?: string | Expression<string> | PlaceholderValue;
  };
};

export type NextCloudV1UserCreateNode = {
  type: 'n8n-nodes-base.nextCloud';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NextCloudV1UserCreateParams>;
};