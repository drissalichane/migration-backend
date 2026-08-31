/**
 * Azure Cosmos DB Node - Version 1
 * Discriminator: resource=item, operation=query
 */


interface Credentials {
  microsoftAzureCosmosDbSharedKeyApi: CredentialReference;
}

export type AzureCosmosDbV1ItemQueryParams = {
  resource: 'item';
  operation: 'query';
/**
 * Select the container you want to use
 * @default {"mode":"list","value":""}
 */
    container?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * The SQL query to execute. Use $1, $2, $3, etc., to reference the 'Query Parameters' set in the options below.
 * @hint Consider using query parameters to prevent SQL injection attacks. Add them in the options below.
 */
    query?: string;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Options
 * @default {}
 */
    options?: {
        /** Query Options
     */
    queryOptions?: {
      /** Comma-separated list of values used as query parameters. Use $1, $2, $3, etc., in your query.
       * @hint Reference them in your query as $1, $2, $3…
       */
      queryParameters?: string | Expression<string> | PlaceholderValue;
    };
  };
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

export type AzureCosmosDbV1ItemQueryOutput = {
  answer?: string;
  createdDate?: string;
  documentType?: string;
  eTag?: string;
  id?: string;
  isActive?: boolean;
  lastModifiedDate?: string;
  metadados?: {
    Email?: string;
    EnvioEmail?: string;
    FollowUp?: string;
    IdLead?: string;
    MensagemTimestamp?: string;
    Nome?: string;
    RespostaAgenteTimestamp?: string;
    sessionId?: string;
    Status?: string;
    Telefone?: string;
  };
  partitionKey?: string;
  query?: string;
  resourceId?: string;
  selfLink?: string;
  timestamp?: string;
  timeStamp?: number;
  version?: number;
};

export type AzureCosmosDbV1ItemQueryNode = {
  type: 'n8n-nodes-base.azureCosmosDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AzureCosmosDbV1ItemQueryParams>;
  output?: Items<AzureCosmosDbV1ItemQueryOutput>;
};