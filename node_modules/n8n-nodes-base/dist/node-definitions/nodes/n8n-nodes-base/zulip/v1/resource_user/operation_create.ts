/**
 * Zulip Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  zulipApi: CredentialReference;
}

/** Create a stream */
export type ZulipV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * The email address of the new user
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * The full name of the new user
 */
    fullName?: string | Expression<string> | PlaceholderValue;
/**
 * The password of the new user
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * The short name of the new user. Not user-visible.
 */
    shortName?: string | Expression<string> | PlaceholderValue;
};

export type ZulipV1UserCreateNode = {
  type: 'n8n-nodes-base.zulip';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZulipV1UserCreateParams>;
};