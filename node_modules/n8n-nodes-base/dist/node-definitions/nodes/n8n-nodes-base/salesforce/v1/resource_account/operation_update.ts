/**
 * Salesforce Node - Version 1
 * Discriminator: resource=account, operation=update
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners) */
export type SalesforceV1AccountUpdateParams = {
  resource: 'account';
  operation: 'update';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * ID of account that needs to be fetched
 */
    accountId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Account number assigned to this account (not the unique ID). Maximum size is 40 characters.
     */
    accountNumber?: string | Expression<string> | PlaceholderValue;
    /** The source of the account record. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    accountSource?: string | Expression<string>;
    /** Estimated annual revenue of the account
     */
    annualRevenue?: number | Expression<number>;
    /** Details for the billing address of this account. Maximum size is 40 characters.
     */
    billingCity?: string | Expression<string> | PlaceholderValue;
    /** Details for the billing address of this account. Maximum size is 80 characters.
     */
    billingCountry?: string | Expression<string> | PlaceholderValue;
    /** Details for the billing address of this account. Maximum size is 20 characters.
     */
    billingPostalCode?: string | Expression<string> | PlaceholderValue;
    /** Details for the billing address of this account. Maximum size is 80 characters.
     */
    billingState?: string | Expression<string> | PlaceholderValue;
    /** Street address for the billing address of this account
     */
    billingStreet?: string | Expression<string> | PlaceholderValue;
    /** Filter by custom fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** The ID of the field to add custom field to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** The value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Text description of the account. Limited to 32,000 KB.
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Fax number for the account
     */
    fax?: string | Expression<string> | PlaceholderValue;
    /** The website of this account. Maximum of 255 characters.
     */
    industry?: string | Expression<string> | PlaceholderValue;
    /** References the ID of a company in Data.com
     */
    jigsaw?: string | Expression<string> | PlaceholderValue;
    /** Name of the account. Maximum size is 255 characters.
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Number Of Employees
     */
    numberOfEmployees?: number | Expression<number>;
    /** The owner of the account. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    ownerId?: string | Expression<string>;
    /** ID of the parent object, if any
     */
    parentId?: string | Expression<string> | PlaceholderValue;
    /** Phone number for the account
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    recordTypeId?: string | Expression<string>;
    /** A brief description of an organization’s line of business, based on its SIC code
     */
    sicDesc?: string | Expression<string> | PlaceholderValue;
    /** Details of the shipping address for this account. City maximum size is 40 characters.
     */
    shippingCity?: string | Expression<string> | PlaceholderValue;
    /** Details of the shipping address for this account. Country maximum size is 80 characters.
     */
    shippingCountry?: string | Expression<string> | PlaceholderValue;
    /** Details of the shipping address for this account. Postal code maximum size is 20 characters.
     */
    shippingPostalCode?: string | Expression<string> | PlaceholderValue;
    /** Details of the shipping address for this account. State maximum size is 80 characters.
     */
    shippingState?: string | Expression<string> | PlaceholderValue;
    /** The street address of the shipping address for this account. Maximum of 255 characters.
     */
    shippingStreet?: string | Expression<string> | PlaceholderValue;
    /** Type of account. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    type?: string | Expression<string>;
    /** The website of this account. Maximum of 255 characters.
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
};

export type SalesforceV1AccountUpdateOutput = {
  success?: boolean;
};

export type SalesforceV1AccountUpdateNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1AccountUpdateParams>;
  output?: Items<SalesforceV1AccountUpdateOutput>;
};