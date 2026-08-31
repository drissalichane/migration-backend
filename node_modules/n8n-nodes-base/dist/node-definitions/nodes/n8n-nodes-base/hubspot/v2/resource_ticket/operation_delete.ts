/**
 * HubSpot Node - Version 2
 * Discriminator: resource=ticket, operation=delete
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Delete a contact */
export type HubspotV2TicketDeleteParams = {
  resource: 'ticket';
  operation: 'delete';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Ticket to Delete
 * @default {"mode":"list","value":""}
 */
    ticketId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type HubspotV2TicketDeleteOutput = {
  deleted?: boolean;
};

export type HubspotV2TicketDeleteNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<HubspotV2TicketDeleteParams>;
  output?: Items<HubspotV2TicketDeleteOutput>;
};