/**
 * AWS DynamoDB Node - Version 1
 * Discriminator: resource=item, operation=upsert
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Create a new record, or update the current one if it already exists (upsert) */
export type AwsDynamoDbV1ItemUpsertParams = {
  resource: 'item';
  operation: 'upsert';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * Table to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    tableName?: string | Expression<string>;
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
      /** Field ID
       */
      fieldId?: string | Expression<string> | PlaceholderValue;
      /** Field Value
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Substitution tokens for attribute names in an expression. Only needed when the parameter "condition expression" is set.
     * @default {}
     */
    eavUi?: {
        /** Expression Attribute Vaue
     */
    eavValues?: Array<{
      /** Attribute
       */
      attribute?: string | Expression<string> | PlaceholderValue;
      /** Type
       * @default S
       */
      type?: 'N' | 'S' | Expression<string>;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** A condition that must be satisfied in order for a conditional upsert to succeed. &lt;a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html"&gt;View details&lt;/a&gt;.
     */
    conditionExpression?: string | Expression<string> | PlaceholderValue;
    /** One or more substitution tokens for attribute names in an expression. &lt;a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html"&gt;View details&lt;/a&gt;.
     * @default {}
     */
    eanUi?: {
        /** Expression
     */
    eanValues?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
/**
 * A filter expression determines which items within the Scan results should be returned to you. All of the other results are discarded. Empty value will return all Scan results.
 * @displayOptions.show { scan: [true] }
 */
    filterExpression?: string | Expression<string> | PlaceholderValue;
};

export type AwsDynamoDbV1ItemUpsertNode = {
  type: 'n8n-nodes-base.awsDynamoDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsDynamoDbV1ItemUpsertParams>;
};