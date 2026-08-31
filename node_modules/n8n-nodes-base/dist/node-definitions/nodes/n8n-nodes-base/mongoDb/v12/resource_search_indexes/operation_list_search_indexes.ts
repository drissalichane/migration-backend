/**
 * MongoDB Node - Version 1.2
 * Discriminator: resource=searchIndexes, operation=listSearchIndexes
 */


interface Credentials {
  mongoDb: CredentialReference;
}

export type MongoDbV12SearchIndexesListSearchIndexesParams = {
  resource: 'searchIndexes';
  operation: 'listSearchIndexes';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * If provided, only lists indexes with the specified name
 */
    indexName?: string | Expression<string> | PlaceholderValue;
};

export type MongoDbV12SearchIndexesListSearchIndexesNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.2;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV12SearchIndexesListSearchIndexesParams>;
};