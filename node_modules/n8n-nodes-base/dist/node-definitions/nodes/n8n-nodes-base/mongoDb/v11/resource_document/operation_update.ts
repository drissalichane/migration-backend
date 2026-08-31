/**
 * MongoDB Node - Version 1.1
 * Discriminator: resource=document, operation=update
 */


interface Credentials {
  mongoDb: CredentialReference;
}

/** Update documents */
export type MongoDbV11DocumentUpdateParams = {
  resource: 'document';
  operation: 'update';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
 * @default id
 */
    updateKey?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of the fields to be included into the new document
 */
    fields?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to perform an insert if no documents match the update key
 * @default false
 */
    upsert?: boolean | Expression<boolean>;
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

export type MongoDbV11DocumentUpdateNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV11DocumentUpdateParams>;
};