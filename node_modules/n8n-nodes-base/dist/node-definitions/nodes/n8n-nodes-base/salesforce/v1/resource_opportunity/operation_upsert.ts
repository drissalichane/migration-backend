/**
 * Salesforce Node - Version 1
 * Discriminator: resource=opportunity, operation=upsert
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents an opportunity, which is a sale or pending deal */
export type SalesforceV1OpportunityUpsertParams = {
  resource: 'opportunity';
  operation: 'upsert';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * The field to check to see if the opportunity already exists. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    externalId?: string | Expression<string>;
/**
 * If this value exists in the 'match against' field, update the opportunity. Otherwise create a new one.
 */
    externalIdValue?: string | Expression<string> | PlaceholderValue;
/**
 * Required. Last name of the opportunity. Limited to 80 characters.
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Required. Date when the opportunity is expected to close.
 */
    closeDate?: string | Expression<string>;
/**
 * Required. Date when the opportunity is expected to close. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    stageName?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the account associated with this opportunity. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    accountId?: string | Expression<string>;
    /** Estimated total sale amount
     */
    amount?: number | Expression<number>;
    /** ID of the campaign that needs to be fetched. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    campaignId?: string | Expression<string>;
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
    /** A description of the opportunity. Label is Contact Description. Limit: 32 KB.
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** It is implied, but not directly controlled, by the StageName field
     */
    forecastCategoryName?: string | Expression<string> | PlaceholderValue;
    /** Source from which the lead was obtained. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    leadSource?: string | Expression<string>;
    /** Description of next task in closing opportunity. Limit: 255 characters.
     */
    nextStep?: string | Expression<string> | PlaceholderValue;
    /** The owner of the opportunity. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner?: string | Expression<string>;
    /** Phone number for the opportunity
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** ID of a related Pricebook2 object
     */
    pricebook2Id?: string | Expression<string> | PlaceholderValue;
    /** Percentage of estimated confidence in closing the opportunity
     */
    probability?: number | Expression<number>;
    /** Type of opportunity. For example, Existing Business or New Business. Label is Opportunity Type.
     */
    type?: 'Business' | 'New Business' | Expression<string>;
  };
};

export type SalesforceV1OpportunityUpsertNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1OpportunityUpsertParams>;
};