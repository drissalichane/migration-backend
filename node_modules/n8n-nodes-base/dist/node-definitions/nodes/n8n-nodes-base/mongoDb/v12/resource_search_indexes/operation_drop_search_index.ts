/**
 * MongoDB Node - Version 1.2
 * Discriminator: resource=searchIndexes, operation=dropSearchIndex
 */


interface Credentials {
  mongoDb: CredentialReference;
}

export type MongoDbV12SearchIndexesDropSearchIndexParams = {
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

export type MongoDbV12SearchIndexesDropSearchIndexNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.2;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV12SearchIndexesDropSearchIndexParams>;
};