/**
 * Mattermost Node - Version 1
 * Discriminator: resource=user, operation=getByEmail
 */


interface Credentials {
  mattermostApi: CredentialReference;
}

/** Get a user by email */
export type MattermostV1UserGetByEmailParams = {
  resource: 'user';
  operation: 'getByEmail';
/**
 * User's email
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type MattermostV1UserGetByEmailNode = {
  type: 'n8n-nodes-base.mattermost';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MattermostV1UserGetByEmailParams>;
};