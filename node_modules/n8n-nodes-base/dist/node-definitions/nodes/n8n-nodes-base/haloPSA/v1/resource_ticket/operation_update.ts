/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=ticket, operation=update
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Update a client */
export type HaloPSAV1TicketUpdateParams = {
  resource: 'ticket';
  operation: 'update';
/**
 * Ticket ID
 */
    ticketId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    agent_id?: string | Expression<string>;
    /** Details
     */
    details?: string | Expression<string> | PlaceholderValue;
    /** Start Date
     */
    startdate?: string | Expression<string>;
    /** Summary
     */
    summary?: string | Expression<string> | PlaceholderValue;
    /** Target Date
     */
    targetdate?: string | Expression<string>;
  };
};

export type HaloPSAV1TicketUpdateNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1TicketUpdateParams>;
};