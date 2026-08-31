/**
 * Microsoft SharePoint Node - Version 1
 * Discriminator: resource=item, operation=upsert
 */


interface Credentials {
  microsoftSharePointOAuth2Api: CredentialReference;
}

/** Create a new item, or update the current one if it already exists (upsert) */
export type MicrosoftSharePointV1ItemUpsertParams = {
  resource: 'item';
  operation: 'upsert';
/**
 * Select the site to retrieve lists from
 * @default {"mode":"list","value":""}
 */
    site?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Select the list you want to create or update an item in
 * @displayOptions.hide { site: [""] }
 * @default {"mode":"list","value":""}
 */
    list?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Columns
 * @displayOptions.hide { site: [""], list: [""] }
 * @default {"mappingMode":"defineBelow","value":null}
 */
    columns?: string;
  requestOptions?: {
    /** Batching
     * @default {"batch":{}}
     */
    batching?: {
        /** Batching
     */
    batch?: {
      /** Input will be split in batches to throttle requests. -1 for disabled. 0 will be treated as 1.
       * @default 50
       */
      batchSize?: number | Expression<number>;
      /** Time (in milliseconds) between each batch of requests. 0 for disabled.
       * @default 1000
       */
      batchInterval?: number | Expression<number>;
    };
  };
    /** Whether to accept the response even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean;
    /** HTTP proxy to use. If authentication is required it can be defined as follow: http://username:password@myproxy:3128
     */
    proxy?: string | Expression<string> | PlaceholderValue;
    /** Time in ms to wait for the server to send response headers (and start the response body) before aborting the request
     * @default 10000
     */
    timeout?: number | Expression<number>;
  };
};

export type MicrosoftSharePointV1ItemUpsertNode = {
  type: 'n8n-nodes-base.microsoftSharePoint';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftSharePointV1ItemUpsertParams>;
};