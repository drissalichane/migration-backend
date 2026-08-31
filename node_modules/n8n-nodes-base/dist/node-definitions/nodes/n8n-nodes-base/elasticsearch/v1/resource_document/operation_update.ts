/**
 * Elasticsearch Node - Version 1
 * Discriminator: resource=document, operation=update
 */


interface Credentials {
  elasticsearchApi: CredentialReference;
}

/** Update a document */
export type ElasticsearchV1DocumentUpdateParams = {
  resource: 'document';
  operation: 'update';
/**
 * ID of the document to update
 */
    indexId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the document to update
 */
    documentId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to insert the input data this node receives in the new row
 * @default defineBelow
 */
    dataToSend?: 'defineBelow' | 'autoMapInputData' | Expression<string>;
/**
 * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
 * @displayOptions.show { dataToSend: ["autoMapInputData"] }
 */
    inputsToIgnore?: string | Expression<string> | PlaceholderValue;
/**
 * Fields to Send
 * @displayOptions.show { dataToSend: ["defineBelow"] }
 * @default {}
 */
    fieldsUi?: {
        /** Field
     */
    fieldValues?: Array<{
      /** Field Name
       */
      fieldId?: string | Expression<string> | PlaceholderValue;
      /** Field Value
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to use the bulk operation to update the document/s
     * @default false
     */
    bulkOperation?: boolean | Expression<boolean>;
    /** If true, Elasticsearch refreshes the affected shards to make this operation visible to search,if wait_for then wait for a refresh to make this operation visible to search,if false do nothing with refreshes
     * @default false
     */
    refresh?: 'true' | 'wait_for' | 'false' | Expression<string>;
  };
};

export type ElasticsearchV1DocumentUpdateNode = {
  type: 'n8n-nodes-base.elasticsearch';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticsearchV1DocumentUpdateParams>;
};