/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=ticket, operation=delete
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Delete a client */
export type HaloPSAV1TicketDeleteParams = {
  resource: 'ticket';
  operation: 'delete';
/**
 * Ticket ID
 */
    ticketId?: string | Expression<string> | PlaceholderValue;
};

export type HaloPSAV1TicketDeleteNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1TicketDeleteParams>;
};