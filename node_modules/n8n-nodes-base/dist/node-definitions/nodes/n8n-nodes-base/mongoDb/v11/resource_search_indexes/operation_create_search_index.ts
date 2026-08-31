/**
 * MongoDB Node - Version 1.1
 * Discriminator: resource=searchIndexes, operation=createSearchIndex
 */


interface Credentials {
  mongoDb: CredentialReference;
}

export type MongoDbV11SearchIndexesCreateSearchIndexParams = {
  resource: 'searchIndexes';
  operation: 'createSearchIndex';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the search index
 */
    indexNameRequired?: string | Expression<string> | PlaceholderValue;
/**
 * The search index definition
 * @hint Learn more about search index definitions &lt;a href="https://www.mongodb.com/docs/atlas/atlas-search/index-definitions/"&gt;here&lt;/a&gt;
 * @default {}
 */
    indexDefinition?: IDataObject | string | Expression<string>;
/**
 * The search index index type
 * @default vectorSearch
 */
    indexType?: 'vectorSearch' | 'search' | Expression<string>;
};

export type MongoDbV11SearchIndexesCreateSearchIndexNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV11SearchIndexesCreateSearchIndexParams>;
};