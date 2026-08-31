/**
 * Salesforce Node - Version 1
 * Discriminator: resource=lead, operation=update
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a prospect or potential */
export type SalesforceV1LeadUpdateParams = {
  resource: 'lead';
  operation: 'update';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * ID of Lead that needs to be fetched
 */
    leadId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Annual revenue for the company of the lead
     */
    annualRevenue?: number | Expression<number>;
    /** City for the address of the lead
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** Company of the lead. If person account record types have been enabled, and if the value of Company is null, the lead converts to a person account.
     */
    company?: string | Expression<string> | PlaceholderValue;
    /** Country of the lead
     */
    country?: string | Expression<string> | PlaceholderValue;
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
    /** Description of the lead
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Email address for the lead
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Fax Number of the lead
     */
    fax?: number | Expression<number>;
    /** First name of the lead. Limited to 40 characters.
     */
    firstname?: string | Expression<string> | PlaceholderValue;
    /** Whether the lead doesn’t want to receive email from Salesforce (true) or does (false). Label is Email Opt Out.
     * @default false
     */
    hasOptedOutOfEmail?: boolean | Expression<boolean>;
    /** Whether the lead doesn’t want to receive fax from Salesforce (true) or does (false). Label is Fax Opt Out.
     * @default false
     */
    HasOptedOutOfFax?: boolean | Expression<boolean>;
    /** Website for the lead
     */
    industry?: string | Expression<string> | PlaceholderValue;
    /** Whether true, lead has been assigned, but not yet viewed. See Unread Leads for more information. Label is Unread By Owner.
     * @default false
     */
    IsUnreadByOwner?: boolean | Expression<boolean>;
    /** References the ID of a contact in Data.com. If a lead has a value in this field, it means that a contact was imported as a lead from Data.com.
     */
    jigsaw?: string | Expression<string> | PlaceholderValue;
    /** Required. Last name of the lead. Limited to 80 characters.
     */
    lastname?: string | Expression<string> | PlaceholderValue;
    /** Source from which the lead was obtained. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    leadSource?: string | Expression<string>;
    /** Contact’s mobile phone number
     */
    mobilePhone?: string | Expression<string> | PlaceholderValue;
    /** Number of employees at the lead’s company. Label is Employees.
     */
    numberOfEmployees?: number | Expression<number>;
    /** The owner of the lead. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner?: string | Expression<string>;
    /** Postal code for the address of the lead. Label is Zip/Postal Code.
     */
    postalCode?: string | Expression<string> | PlaceholderValue;
    /** Phone number for the lead
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    recordTypeId?: string | Expression<string>;
    /** Rating of the lead
     */
    rating?: string | Expression<string> | PlaceholderValue;
    /** Salutation for the lead
     */
    salutation?: string | Expression<string> | PlaceholderValue;
    /** State for the address of the lead
     */
    state?: string | Expression<string> | PlaceholderValue;
    /** Status code for this converted lead. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    status?: string | Expression<string>;
    /** Street number and name for the address of the lead
     */
    street?: string | Expression<string> | PlaceholderValue;
    /** Title for the lead, for example CFO or CEO
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Website for the lead
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
};

export type SalesforceV1LeadUpdateOutput = {
  success?: boolean;
};

export type SalesforceV1LeadUpdateNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1LeadUpdateParams>;
  output?: Items<SalesforceV1LeadUpdateOutput>;
};