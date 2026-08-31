/**
 * Elasticsearch Node - Version 1
 * Discriminator: resource=index, operation=getAll
 */


interface Credentials {
  elasticsearchApi: CredentialReference;
}

/** Get many documents */
export type ElasticsearchV1IndexGetAllParams = {
  resource: 'index';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
};

export type ElasticsearchV1IndexGetAllNode = {
  type: 'n8n-nodes-base.elasticsearch';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticsearchV1IndexGetAllParams>;
};