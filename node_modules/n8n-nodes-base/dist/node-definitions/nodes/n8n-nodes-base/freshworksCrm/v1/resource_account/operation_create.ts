/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=account, operation=create
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Create an account */
export type FreshworksCrmV1AccountCreateParams = {
  resource: 'account';
  operation: 'create';
/**
 * Name of the account
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address of the account
     */
    address?: string | Expression<string> | PlaceholderValue;
    /** Annual revenue of the account
     * @default 0
     */
    annual_revenue?: number | Expression<number>;
    /** ID of the business that the account belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    business_type_id?: string | Expression<string>;
    /** City that the account belongs to
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** Country that the account belongs to
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** Facebook username of the account
     */
    facebook?: string | Expression<string> | PlaceholderValue;
    /** ID of the industry that the account belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    industry_type_id?: string | Expression<string>;
    /** LinkedIn account of the account
     */
    linkedin?: string | Expression<string> | PlaceholderValue;
    /** Number of employees in the account
     * @default 0
     */
    number_of_employees?: number | Expression<number>;
    /** ID of the user to whom the account is assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner_id?: string | Expression<string>;
    /** Parent account ID of the account
     */
    parent_sales_account_id?: string | Expression<string> | PlaceholderValue;
    /** Phone number of the account
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** State that the account belongs to
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** ID of the territory that the account belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    territory_id?: string | Expression<string>;
    /** Twitter username of the account
     */
    twitter?: string | Expression<string> | PlaceholderValue;
    /** Website of the account
     */
    website?: string | Expression<string> | PlaceholderValue;
    /** Zipcode of the region that the account belongs to
     */
    zipcode?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshworksCrmV1AccountCreateNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1AccountCreateParams>;
};