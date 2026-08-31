/**
 * MongoDB Node - Version 1
 * Discriminator: resource=document, operation=insert
 */


interface Credentials {
  mongoDb: CredentialReference;
}

/** Insert documents */
export type MongoDbV1DocumentInsertParams = {
  resource: 'document';
  operation: 'insert';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of the fields to be included into the new document
 */
    fields?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Comma-separated list of fields that will be parsed as Mongo Date type
     */
    dateFields?: string | Expression<string> | PlaceholderValue;
    /** Whether to use dot notation to access date fields
     * @default false
     */
    useDotNotation?: boolean | Expression<boolean>;
  };
};

export type MongoDbV1DocumentInsertNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV1DocumentInsertParams>;
};