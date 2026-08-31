/**
 * Mattermost Node - Version 1
 * Discriminator: resource=user, operation=getById
 */


interface Credentials {
  mattermostApi: CredentialReference;
}

/** Get a user by ID */
export type MattermostV1UserGetByIdParams = {
  resource: 'user';
  operation: 'getById';
/**
 * User's ID
 */
    userIds?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Only return users that have been modified since the given Unix timestamp (in milliseconds)
     */
    since?: string | Expression<string>;
  };
};

export type MattermostV1UserGetByIdNode = {
  type: 'n8n-nodes-base.mattermost';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MattermostV1UserGetByIdParams>;
};