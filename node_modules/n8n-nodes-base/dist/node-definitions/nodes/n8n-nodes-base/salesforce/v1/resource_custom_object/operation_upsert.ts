/**
 * Salesforce Node - Version 1
 * Discriminator: resource=customObject, operation=upsert
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a custom object */
export type SalesforceV1CustomObjectUpsertParams = {
  resource: 'customObject';
  operation: 'upsert';
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
 * The field to check to see if the object already exists. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    externalId?: string | Expression<string>;
/**
 * If this value exists in the 'match against' field, update the object. Otherwise create a new one.
 */
    externalIdValue?: string | Expression<string> | PlaceholderValue;
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

export type SalesforceV1CustomObjectUpsertOutput = {
  created?: boolean;
  id?: string;
  success?: boolean;
};

export type SalesforceV1CustomObjectUpsertNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1CustomObjectUpsertParams>;
  output?: Items<SalesforceV1CustomObjectUpsertOutput>;
};