/**
 * ActiveCampaign Node - Version 1
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  activeCampaignApi: CredentialReference;
}

/** Delete an account */
export type ActiveCampaignV1ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * ID of the contact to delete
 * @default 0
 */
    contactId?: number | Expression<number>;
};

export type ActiveCampaignV1ContactDeleteNode = {
  type: 'n8n-nodes-base.activeCampaign';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActiveCampaignV1ContactDeleteParams>;
};