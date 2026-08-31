/**
 * MongoDB Node - Version 1
 * Discriminator: resource=searchIndexes, operation=dropSearchIndex
 */


interface Credentials {
  mongoDb: CredentialReference;
}

export type MongoDbV1SearchIndexesDropSearchIndexParams = {
  resource: 'searchIndexes';
  operation: 'dropSearchIndex';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the search index
 */
    indexNameRequired?: string | Expression<string> | PlaceholderValue;
};

export type MongoDbV1SearchIndexesDropSearchIndexNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV1SearchIndexesDropSearchIndexParams>;
};