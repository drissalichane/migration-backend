/**
 * MongoDB Node - Version 1.1
 * Discriminator: resource=document, operation=aggregate
 */


interface Credentials {
  mongoDb: CredentialReference;
}

/** Aggregate documents */
export type MongoDbV11DocumentAggregateParams = {
  resource: 'document';
  operation: 'aggregate';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * MongoDB aggregation pipeline query in JSON format
 * @hint Learn more about aggregation pipeline &lt;a href="https://docs.mongodb.com/manual/core/aggregation-pipeline/"&gt;here&lt;/a&gt;
 */
    query?: IDataObject | string | Expression<string>;
};

export type MongoDbV11DocumentAggregateNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV11DocumentAggregateParams>;
};