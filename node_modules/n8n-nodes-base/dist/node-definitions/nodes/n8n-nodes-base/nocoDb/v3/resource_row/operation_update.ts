/**
 * NocoDB Node - Version 3
 * Discriminator: resource=row, operation=update
 */


interface Credentials {
  nocoDb: CredentialReference;
  nocoDbApiToken: CredentialReference;
}

/** Update a row */
export type NocoDbV3RowUpdateParams = {
  resource: 'row';
  operation: 'update';
  authentication?: 'nocoDbApiToken' | 'nocoDb' | Expression<string>;
/**
 * API Version
 * @default 3
 */
    version?: 1 | 2 | 3 | Expression<number>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { version: [3] }
 * @default none
 */
    workspaceId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { version: [3, 1, 2] }
 */
    projectId?: string | Expression<string>;
/**
 * The table to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { version: [2, 3, 1] }
 */
    table?: string | Expression<string>;
/**
 * Primary Key Type
 * @displayOptions.show { version: [1, 2, 3] }
 * @default id
 */
    primaryKey?: 'id' | 'ncRecordId' | 'custom' | Expression<string>;
/**
 * Field Name
 * @displayOptions.show { version: [1, 2, 3], primaryKey: ["custom"] }
 */
    customPrimaryKey?: string | Expression<string> | PlaceholderValue;
/**
 * The value of the ID field
 * @displayOptions.show { version: [1, 2, 3] }
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to insert the input data this node receives in the new row
 * @default defineBelow
 */
    dataToSend?: 'autoMapInputData' | 'defineBelow' | Expression<string>;
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
      fieldName?: string | Expression<string> | PlaceholderValue;
      /** Whether the field data to set is binary and should be taken from a binary property
       * @default false
       */
      binaryData?: boolean | Expression<boolean>;
      /** Field Value
       * @displayOptions.show { binaryData: [false] }
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
      /** The field containing the binary file data to be uploaded
       * @displayOptions.show { binaryData: [true] }
       */
      binaryProperty?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type NocoDbV3RowUpdateNode = {
  type: 'n8n-nodes-base.nocoDb';
  version: 3;
  credentials?: Credentials;
  config: NodeConfig<NocoDbV3RowUpdateParams>;
};