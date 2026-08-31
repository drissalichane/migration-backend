/**
 * Elasticsearch Node - Version 1
 * Discriminator: resource=index, operation=delete
 */


interface Credentials {
  elasticsearchApi: CredentialReference;
}

/** Delete a document */
export type ElasticsearchV1IndexDeleteParams = {
  resource: 'index';
  operation: 'delete';
/**
 * ID of the index to delete
 */
    indexId?: string | Expression<string> | PlaceholderValue;
};

export type ElasticsearchV1IndexDeleteNode = {
  type: 'n8n-nodes-base.elasticsearch';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticsearchV1IndexDeleteParams>;
};