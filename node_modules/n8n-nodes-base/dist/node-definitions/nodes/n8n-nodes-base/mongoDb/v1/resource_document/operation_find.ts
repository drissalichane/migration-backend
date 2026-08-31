/**
 * MongoDB Node - Version 1
 * Discriminator: resource=document, operation=find
 */


interface Credentials {
  mongoDb: CredentialReference;
}

/** Find documents */
export type MongoDbV1DocumentFindParams = {
  resource: 'document';
  operation: 'find';
/**
 * MongoDB Collection
 */
    collection?: string | Expression<string> | PlaceholderValue;
/**
 * Add query options
 * @default {}
 */
    options?: {
    /** Use limit to specify the maximum number of documents or 0 for unlimited documents
     * @default 0
     */
    limit?: number | Expression<number>;
    /** The number of documents to skip in the results set
     * @default 0
     */
    skip?: number | Expression<number>;
    /** A JSON that defines the sort order of the result set
     * @default {}
     */
    sort?: IDataObject | string | Expression<string>;
    /** A JSON that defines a selection of fields to retrieve or exclude from the result set
     * @default {}
     */
    projection?: IDataObject | string | Expression<string>;
  };
/**
 * MongoDB Find query
 * @default {}
 */
    query?: IDataObject | string | Expression<string>;
};

export type MongoDbV1DocumentFindNode = {
  type: 'n8n-nodes-base.mongoDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MongoDbV1DocumentFindParams>;
};