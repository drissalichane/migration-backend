/**
 * Wordpress Node - Version 1
 * Discriminator: resource=user, operation=update
 */


interface Credentials {
  wordpressApi: CredentialReference;
  wordpressOAuth2Api: CredentialReference;
}

/** Update a post */
export type WordpressV1UserUpdateParams = {
  resource: 'user';
  operation: 'update';
/**
 * The authentication method to use
 * @default basicAuth
 */
    authType?: 'basicAuth' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for the user
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Login name for the user
     */
    username?: string | Expression<string> | PlaceholderValue;
    /** Display name for the user
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** First name for the user
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Last name for the user
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** The email address for the user
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Password for the user (never included)
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** URL of the user
     */
    url?: string | Expression<string> | PlaceholderValue;
    /** Description of the user
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** The nickname for the user
     */
    nickname?: string | Expression<string> | PlaceholderValue;
    /** An alphanumeric identifier for the user
     */
    slug?: string | Expression<string> | PlaceholderValue;
  };
};

export type WordpressV1UserUpdateNode = {
  type: 'n8n-nodes-base.wordpress';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WordpressV1UserUpdateParams>;
};