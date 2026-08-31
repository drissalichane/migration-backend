/**
 * MongoDB Node - Version 1.2
 * Discriminator: resource=document, operation=delete
 */


interface Credentials {
  mongoDb: CredentialReference;
}

/** Delete documents */
export type MongoDbV12DocumentDeleteParams = {
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

export type MongoDbV12DocumentDeleteNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.2;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV12DocumentDeleteParams>;
};