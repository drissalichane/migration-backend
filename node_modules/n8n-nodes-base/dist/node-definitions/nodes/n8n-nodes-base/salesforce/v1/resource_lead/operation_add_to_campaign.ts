/**
 * Salesforce Node - Version 1
 * Discriminator: resource=lead, operation=addToCampaign
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a prospect or potential */
export type SalesforceV1LeadAddToCampaignParams = {
  resource: 'lead';
  operation: 'addToCampaign';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * ID of contact that needs to be fetched
 */
    leadId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the campaign that needs to be fetched. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    campaignId?: string | Expression<string>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Controls the HasResponded flag on this object
     */
    status?: string | Expression<string> | PlaceholderValue;
  };
};

export type SalesforceV1LeadAddToCampaignOutput = {
  id?: string;
  success?: boolean;
};

export type SalesforceV1LeadAddToCampaignNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1LeadAddToCampaignParams>;
  output?: Items<SalesforceV1LeadAddToCampaignOutput>;
};