/**
 * ActiveCampaign Node - Version 1
 * Discriminator: resource=accountContact, operation=create
 */


interface Credentials {
  activeCampaignApi: CredentialReference;
}

/** Create an account */
export type ActiveCampaignV1AccountContactCreateParams = {
  resource: 'accountContact';
  operation: 'create';
/**
 * Account ID
 */
    account?: number | Expression<number>;
/**
 * Contact ID
 */
    contact?: number | Expression<number>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Job Title of the contact at the account
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
  };
};

export type ActiveCampaignV1AccountContactCreateNode = {
  type: 'n8n-nodes-base.activeCampaign';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActiveCampaignV1AccountContactCreateParams>;
};