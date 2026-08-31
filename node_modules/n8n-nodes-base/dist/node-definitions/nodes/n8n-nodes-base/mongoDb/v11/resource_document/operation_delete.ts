/**
 * MongoDB Node - Version 1.1
 * Discriminator: resource=document, operation=delete
 */


interface Credentials {
  mongoDb: CredentialReference;
}

/** Delete documents */
export type MongoDbV11DocumentDeleteParams = {
  resource: 'document';
  operation: 'delete';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * MongoDB Delete query
 * @default {}
 */
    query?: IDataObject | string | Expression<string>;
};

export type MongoDbV11DocumentDeleteNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV11DocumentDeleteParams>;
};