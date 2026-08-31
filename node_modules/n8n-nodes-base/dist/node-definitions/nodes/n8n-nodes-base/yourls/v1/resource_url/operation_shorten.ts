/**
 * Yourls Node - Version 1
 * Discriminator: resource=url, operation=shorten
 */


interface Credentials {
  yourlsApi: CredentialReference;
}

/** Shorten a URL */
export type YourlsV1UrlShortenParams = {
  resource: 'url';
  operation: 'shorten';
/**
 * The URL to shorten
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Keyword
     */
    keyword?: string | Expression<string> | PlaceholderValue;
    /** Title for custom short URLs
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type YourlsV1UrlShortenNode = {
  type: 'n8n-nodes-base.yourls';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<YourlsV1UrlShortenParams>;
};