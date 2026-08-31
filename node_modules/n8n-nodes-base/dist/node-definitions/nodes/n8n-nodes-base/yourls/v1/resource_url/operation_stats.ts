/**
 * Yourls Node - Version 1
 * Discriminator: resource=url, operation=stats
 */


interface Credentials {
  yourlsApi: CredentialReference;
}

/** Get stats about one short URL */
export type YourlsV1UrlStatsParams = {
  resource: 'url';
  operation: 'stats';
/**
 * The short URL for which to get stats
 */
    shortUrl?: string | Expression<string> | PlaceholderValue;
};

export type YourlsV1UrlStatsNode = {
  type: 'n8n-nodes-base.yourls';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<YourlsV1UrlStatsParams>;
};