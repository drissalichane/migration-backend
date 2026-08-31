/**
 * AWS DynamoDB Node - Version 1
 * Discriminator: resource=item, operation=delete
 */


interface Credentials {
  aws: CredentialReference;
  awsAssumeRole: CredentialReference;
}

/** Delete an item */
export type AwsDynamoDbV1ItemDeleteParams = {
  resource: 'item';
  operation: 'delete';
  authentication?: 'iam' | 'assumeRole' | Expression<string>;
/**
 * Table to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    tableName?: string | Expression<string>;
/**
 * Use ReturnValues if you want to get the item attributes as they appeared before they were deleted
 * @default NONE
 */
    returnValues?: 'ALL_OLD' | 'NONE' | Expression<string>;
/**
 * Item's primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
 * @default {}
 */
    keysUi?: {
        /** Key
     */
    keyValues?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Type
       * @default S
       */
      type?: 'B' | 'N' | 'S' | Expression<string>;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @displayOptions.show { returnValues: ["ALL_OLD"] }
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** A condition that must be satisfied in order for a conditional delete to succeed
     */
    conditionExpression?: string | Expression<string> | PlaceholderValue;
    /** One or more substitution tokens for attribute names in an expression. Check &lt;a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html"&gt;Info&lt;/a&gt;.
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
    /** Substitution tokens for attribute names in an expression. Only needed when the parameter "condition expression" is set.
     * @default {}
     */
    expressionAttributeUi?: {
        /** Expression Attribute Value
     */
    expressionAttributeValues?: Array<{
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
  };
/**
 * A filter expression determines which items within the Scan results should be returned to you. All of the other results are discarded. Empty value will return all Scan results.
 * @displayOptions.show { scan: [true] }
 */
    filterExpression?: string | Expression<string> | PlaceholderValue;
};

export type AwsDynamoDbV1ItemDeleteOutput = {
  success?: boolean;
};

export type AwsDynamoDbV1ItemDeleteNode = {
  type: 'n8n-nodes-base.awsDynamoDb';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AwsDynamoDbV1ItemDeleteParams>;
  output?: Items<AwsDynamoDbV1ItemDeleteOutput>;
};