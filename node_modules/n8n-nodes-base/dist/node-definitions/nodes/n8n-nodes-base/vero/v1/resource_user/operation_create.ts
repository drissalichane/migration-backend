/**
 * Vero Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  veroApi: CredentialReference;
}

/** Create, update and manage the subscription status of your users */
export type VeroV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * The unique identifier of the customer
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The table to create the row in
     */
    email?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Key value pairs that represent the custom user properties you want to update
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    dataAttributesUi?: {
        /** Data
     */
    dataAttributesValues?: Array<{
      /** Name of the property to set
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value of the property to set
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Key value pairs that represent the custom user properties you want to update
 * @displayOptions.show { jsonParameters: [true] }
 */
    dataAttributesJson?: IDataObject | string | Expression<string>;
};

export type VeroV1UserCreateNode = {
  type: 'n8n-nodes-base.vero';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VeroV1UserCreateParams>;
};