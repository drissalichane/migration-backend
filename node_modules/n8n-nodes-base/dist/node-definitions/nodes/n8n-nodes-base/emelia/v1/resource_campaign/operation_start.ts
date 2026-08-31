/**
 * Emelia Node - Version 1
 * Discriminator: resource=campaign, operation=start
 */


interface Credentials {
  emeliaApi: CredentialReference;
}

export type EmeliaV1CampaignStartParams = {
  resource: 'campaign';
  operation: 'start';
/**
 * The ID of the campaign to start. Email provider and contacts must be set.
 */
    campaignId?: string | Expression<string> | PlaceholderValue;
};

export type EmeliaV1CampaignStartNode = {
  type: 'n8n-nodes-base.emelia';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<EmeliaV1CampaignStartParams>;
};