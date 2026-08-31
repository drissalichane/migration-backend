/**
 * Zendesk Node - Version 1
 * Discriminator: resource=ticket, operation=delete
 */


interface Credentials {
  zendeskApi: CredentialReference;
  zendeskOAuth2Api: CredentialReference;
}

/** Tickets are the means through which your end users (customers) communicate with agents in Zendesk Support */
export type ZendeskV1TicketDeleteParams = {
  resource: 'ticket';
  operation: 'delete';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Ticket Type
 * @default regular
 */
    ticketType?: 'regular' | 'suspended' | Expression<string>;
/**
 * Ticket ID
 * @displayOptions.show { ticketType: ["regular"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ZendeskV1TicketDeleteNode = {
  type: 'n8n-nodes-base.zendesk';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZendeskV1TicketDeleteParams>;
};