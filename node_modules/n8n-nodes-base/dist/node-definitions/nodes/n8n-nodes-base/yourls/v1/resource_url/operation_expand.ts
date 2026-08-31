/**
 * Yourls Node - Version 1
 * Discriminator: resource=url, operation=expand
 */


interface Credentials {
  yourlsApi: CredentialReference;
}

/** Expand a URL */
export type YourlsV1UrlExpandParams = {
  resource: 'url';
  operation: 'expand';
/**
 * The short URL to expand
 */
    shortUrl?: string | Expression<string> | PlaceholderValue;
};

export type YourlsV1UrlExpandNode = {
  type: 'n8n-nodes-base.yourls';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<YourlsV1UrlExpandParams>;
};