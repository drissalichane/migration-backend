/**
 * Wordpress Node - Version 1
 * Discriminator: resource=user, operation=getAll
 */


interface Credentials {
  wordpressApi: CredentialReference;
  wordpressOAuth2Api: CredentialReference;
}

/** Get many posts */
export type WordpressV1UserGetAllParams = {
  resource: 'user';
  operation: 'getAll';
/**
 * The authentication method to use
 * @default basicAuth
 */
    authType?: 'basicAuth' | 'oAuth2' | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 5
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Scope under which the request is made; determines fields present in response
     * @default view
     */
    context?: 'view' | 'embed' | 'edit' | Expression<string>;
    /** Sort collection by object attribute
     * @default id
     */
    orderBy?: 'email' | 'id' | 'include' | 'include_slugs' | 'name' | 'registered_date' | 'slug' | 'url' | Expression<string>;
    /** Order sort attribute ascending or descending
     * @default desc
     */
    order?: 'asc' | 'desc' | Expression<string>;
    /** Limit results to those matching a string
     */
    search?: string | Expression<string> | PlaceholderValue;
    /** Limit result set to users who are considered authors
     * @default authors
     */
    who?: 'authors' | Expression<string>;
  };
};

export type WordpressV1UserGetAllOutput = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls?: {
    '24': string;
    '48': string;
    '96': string;
  };
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
  };
};

export type WordpressV1UserGetAllNode = {
  type: 'n8n-nodes-base.wordpress';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WordpressV1UserGetAllParams>;
  output?: Items<WordpressV1UserGetAllOutput>;
};