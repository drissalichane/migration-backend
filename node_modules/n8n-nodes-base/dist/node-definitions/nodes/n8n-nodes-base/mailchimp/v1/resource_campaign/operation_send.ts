/**
 * Mailchimp Node - Version 1
 * Discriminator: resource=campaign, operation=send
 */


interface Credentials {
  mailchimpApi: CredentialReference;
  mailchimpOAuth2Api: CredentialReference;
}

/** Send a campaign */
export type MailchimpV1CampaignSendParams = {
  resource: 'campaign';
  operation: 'send';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * List of Campaigns
 */
    campaignId?: string | Expression<string> | PlaceholderValue;
};

export type MailchimpV1CampaignSendNode = {
  type: 'n8n-nodes-base.mailchimp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MailchimpV1CampaignSendParams>;
};