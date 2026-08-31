/**
 * ActiveCampaign Node - Version 1
 * Discriminator: resource=deal, operation=createNote
 */


interface Credentials {
  activeCampaignApi: CredentialReference;
}

/** Create a deal note */
export type ActiveCampaignV1DealCreateNoteParams = {
  resource: 'deal';
  operation: 'createNote';
/**
 * The ID of the deal note
 */
    dealId?: number | Expression<number>;
/**
 * The content of the deal note
 */
    dealNote?: string | Expression<string> | PlaceholderValue;
};

export type ActiveCampaignV1DealCreateNoteNode = {
  type: 'n8n-nodes-base.activeCampaign';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActiveCampaignV1DealCreateNoteParams>;
};