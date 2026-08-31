/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=ticket, operation=get
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Retrieve customer */
export type SyncroMspV1TicketGetParams = {
  resource: 'ticket';
  operation: 'get';
/**
 * Get specific customer by ID
 */
    ticketId?: string | Expression<string> | PlaceholderValue;
};

export type SyncroMspV1TicketGetNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1TicketGetParams>;
};