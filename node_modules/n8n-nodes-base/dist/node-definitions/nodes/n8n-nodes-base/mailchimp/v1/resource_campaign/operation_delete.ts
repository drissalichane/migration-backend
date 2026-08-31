/**
 * Mailchimp Node - Version 1
 * Discriminator: resource=campaign, operation=delete
 */


interface Credentials {
  mailchimpApi: CredentialReference;
  mailchimpOAuth2Api: CredentialReference;
}

/** Delete a member on list */
export type MailchimpV1CampaignDeleteParams = {
  resource: 'campaign';
  operation: 'delete';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * List of Campaigns
 */
    campaignId?: string | Expression<string> | PlaceholderValue;
};

export type MailchimpV1CampaignDeleteNode = {
  type: 'n8n-nodes-base.mailchimp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MailchimpV1CampaignDeleteParams>;
};