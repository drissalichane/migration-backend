/**
 * ActiveCampaign Node - Version 1
 * Discriminator: resource=deal, operation=updateNote
 */


interface Credentials {
  activeCampaignApi: CredentialReference;
}

/** Update a deal note */
export type ActiveCampaignV1DealUpdateNoteParams = {
  resource: 'deal';
  operation: 'updateNote';
/**
 * The ID of the deal note
 */
    dealId?: number | Expression<number>;
/**
 * The ID of the deal note
 */
    dealNoteId?: number | Expression<number>;
/**
 * The content of the deal note
 */
    dealNote?: string | Expression<string> | PlaceholderValue;
};

export type ActiveCampaignV1DealUpdateNoteNode = {
  type: 'n8n-nodes-base.activeCampaign';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActiveCampaignV1DealUpdateNoteParams>;
};