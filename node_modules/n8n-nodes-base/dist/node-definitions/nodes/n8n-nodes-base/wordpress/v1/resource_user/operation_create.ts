/**
 * Wordpress Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  wordpressApi: CredentialReference;
  wordpressOAuth2Api: CredentialReference;
}

/** Create a post */
export type WordpressV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * The authentication method to use
 * @default basicAuth
 */
    authType?: 'basicAuth' | 'oAuth2' | Expression<string>;
/**
 * Login name for the user
 */
    username?: string | Expression<string> | PlaceholderValue;
/**
 * Display name for the user
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * First name for the user
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * Last name for the user
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * The email address for the user
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Password for the user (never included)
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
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

export type WordpressV1UserCreateOutput = {
  _links?: {
    collection?: Array<{
      href?: string;
    }>;
    self?: Array<{
      href?: string;
      targetHints?: {
        allow?: Array<string>;
      };
    }>;
  };
  avatar_urls?: {
    '24'?: string;
    '48'?: string;
    '96'?: string;
  };
  capabilities?: {
    level_0?: boolean;
    read?: boolean;
    subscriber?: boolean;
  };
  description?: string;
  email?: string;
  extra_capabilities?: {
    subscriber?: boolean;
  };
  first_name?: string;
  id?: number;
  last_name?: string;
  link?: string;
  locale?: string;
  name?: string;
  nickname?: string;
  registered_date?: string;
  roles?: Array<string>;
  slug?: string;
  url?: string;
  username?: string;
};

export type WordpressV1UserCreateNode = {
  type: 'n8n-nodes-base.wordpress';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WordpressV1UserCreateParams>;
  output?: Items<WordpressV1UserCreateOutput>;
};