/**
 * MongoDB Node - Version 1.1
 * Discriminator: resource=searchIndexes, operation=dropSearchIndex
 */


interface Credentials {
  mongoDb: CredentialReference;
}

export type MongoDbV11SearchIndexesDropSearchIndexParams = {
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

export type MongoDbV11SearchIndexesDropSearchIndexNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV11SearchIndexesDropSearchIndexParams>;
};