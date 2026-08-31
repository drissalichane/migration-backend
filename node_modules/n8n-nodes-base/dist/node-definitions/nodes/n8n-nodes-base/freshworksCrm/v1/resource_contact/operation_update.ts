/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=contact, operation=update
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Update an account */
export type FreshworksCrmV1ContactUpdateParams = {
  resource: 'contact';
  operation: 'update';
/**
 * ID of the contact to update
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Address of the contact
     */
    address?: string | Expression<string> | PlaceholderValue;
    /** ID of the campaign that led your contact to your webapp. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    campaign_id?: string | Expression<string>;
    /** City that the contact belongs to
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** ID of the contact status that the contact belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    contact_status_id?: string | Expression<string>;
    /** Country that the contact belongs to
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** External ID of the contact
     */
    external_id?: string | Expression<string> | PlaceholderValue;
    /** Facebook username of the contact
     */
    facebook?: string | Expression<string> | PlaceholderValue;
    /** First name of the contact
     */
    first_name?: string | Expression<string> | PlaceholderValue;
    /** Designation of the contact in the account they belong to
     */
    job_title?: string | Expression<string> | PlaceholderValue;
    /** Keywords that the contact used to reach your website/web app
     */
    keyword?: string | Expression<string> | PlaceholderValue;
    /** Last name of the contact
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** ID of the source where contact came from. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    lead_source_id?: string | Expression<string>;
    /** ID of the lifecycle stage that the contact belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    lifecycle_stage_id?: string | Expression<string>;
    /** LinkedIn account of the contact
     */
    linkedin?: string | Expression<string> | PlaceholderValue;
    /** Medium that led your contact to your website/webapp
     */
    medium?: string | Expression<string> | PlaceholderValue;
    /** Mobile phone number of the contact
     */
    mobile_number?: string | Expression<string> | PlaceholderValue;
    /** ID of the user to whom the contact is assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner_id?: string | Expression<string>;
    /** Accounts which contact belongs to. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    sales_accounts?: string[];
    /** State that the contact belongs to
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** Status of subscription that the contact is in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    subscription_status?: string | Expression<string>;
    /** Type of subscription that the contact is in. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    subscription_types?: string | Expression<string>;
    /** ID of the territory that the contact belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    territory_id?: string | Expression<string>;
    /** Timezone that the contact belongs to
     */
    time_zone?: string | Expression<string> | PlaceholderValue;
    /** Twitter username of the contact
     */
    twitter?: string | Expression<string> | PlaceholderValue;
    /** Work phone number of the contact
     */
    work_number?: string | Expression<string> | PlaceholderValue;
    /** Zipcode of the region that the contact belongs to
     */
    zipcode?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshworksCrmV1ContactUpdateNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1ContactUpdateParams>;
};