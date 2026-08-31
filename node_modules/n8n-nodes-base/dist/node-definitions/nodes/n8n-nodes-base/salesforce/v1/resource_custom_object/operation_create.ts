/**
 * Salesforce Node - Version 1
 * Discriminator: resource=customObject, operation=create
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a custom object */
export type SalesforceV1CustomObjectCreateParams = {
  resource: 'customObject';
  operation: 'create';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * Name of the custom object. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    customObject?: string | Expression<string>;
/**
 * Filter by custom fields
 * @default {}
 */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** The ID of the field. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** The value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    recordTypeId?: string | Expression<string>;
  };
};

export type SalesforceV1CustomObjectCreateOutput = {
  id?: string;
  success?: boolean;
};

export type SalesforceV1CustomObjectCreateNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1CustomObjectCreateParams>;
  output?: Items<SalesforceV1CustomObjectCreateOutput>;
};