/**
 * HubSpot Node - Version 2.1
 * Discriminator: resource=ticket, operation=delete
 */


interface Credentials {
  hubspotApi: CredentialReference;
  hubspotAppToken: CredentialReference;
  hubspotOAuth2Api: CredentialReference;
}

/** Delete a contact */
export type HubspotV21TicketDeleteParams = {
  resource: 'ticket';
  operation: 'delete';
  authentication?: 'apiKey' | 'appToken' | 'oAuth2' | Expression<string>;
/**
 * Ticket to Delete
 * @default {"mode":"list","value":""}
 */
    ticketId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type HubspotV21TicketDeleteOutput = {
  deleted?: boolean;
};

export type HubspotV21TicketDeleteNode = {
  type: 'n8n-nodes-base.hubspot';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<HubspotV21TicketDeleteParams>;
  output?: Items<HubspotV21TicketDeleteOutput>;
};