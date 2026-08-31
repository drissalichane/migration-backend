/**
 * MongoDB Node - Version 1.2
 * Discriminator: resource=searchIndexes, operation=updateSearchIndex
 */


interface Credentials {
  mongoDb: CredentialReference;
}

export type MongoDbV12SearchIndexesUpdateSearchIndexParams = {
  resource: 'searchIndexes';
  operation: 'updateSearchIndex';
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
};

export type MongoDbV12SearchIndexesUpdateSearchIndexNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.2;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV12SearchIndexesUpdateSearchIndexParams>;
};