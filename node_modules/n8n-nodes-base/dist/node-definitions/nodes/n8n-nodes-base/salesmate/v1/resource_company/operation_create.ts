/**
 * Salesmate Node - Version 1
 * Discriminator: resource=company, operation=create
 */


interface Credentials {
  salesmateApi: CredentialReference;
}

/** Create a company */
export type SalesmateV1CompanyCreateParams = {
  resource: 'company';
  operation: 'create';
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    owner?: string | Expression<string>;
/**
 * Whether the data should include the fields details
 * @default false
 */
    rawData?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Website
     */
    website?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Other Phone
     */
    otherPhone?: string | Expression<string> | PlaceholderValue;
    /** Facebook Handle
     */
    facebookHandle?: string | Expression<string> | PlaceholderValue;
    /** Google Plus Handle
     */
    googlePlusHandle?: string | Expression<string> | PlaceholderValue;
    /** LinkedIn Handle
     */
    linkedInHandle?: string | Expression<string> | PlaceholderValue;
    /** Skype ID
     */
    skypeId?: string | Expression<string> | PlaceholderValue;
    /** Twitter Handle
     */
    twitterHandle?: string | Expression<string> | PlaceholderValue;
    /** Currency
     */
    currency?: string | Expression<string> | PlaceholderValue;
    /** Billing Address Line 1
     */
    billingAddressLine1?: string | Expression<string> | PlaceholderValue;
    /** Billing Address Line 2
     */
    billingAddressLine2?: string | Expression<string> | PlaceholderValue;
    /** Billing City
     */
    billingCity?: string | Expression<string> | PlaceholderValue;
    /** Billing Zip Code
     */
    billingZipCode?: string | Expression<string> | PlaceholderValue;
    /** Billing State
     */
    billingState?: string | Expression<string> | PlaceholderValue;
    /** Billing Country
     */
    billingState?: string | Expression<string> | PlaceholderValue;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Tags
     */
    tags?: string | Expression<string> | PlaceholderValue;
  };
};

export type SalesmateV1CompanyCreateNode = {
  type: 'n8n-nodes-base.salesmate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesmateV1CompanyCreateParams>;
};