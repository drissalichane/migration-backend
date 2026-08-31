/**
 * Freshservice Node - Version 1
 * Discriminator: resource=ticket, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1TicketDeleteParams = {
  resource: 'ticket';
  operation: 'delete';
/**
 * ID of the ticket to delete
 */
    ticketId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1TicketDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1TicketDeleteParams>;
};