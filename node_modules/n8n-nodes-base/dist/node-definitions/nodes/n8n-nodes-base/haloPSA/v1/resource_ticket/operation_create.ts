/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=ticket, operation=create
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Create a client */
export type HaloPSAV1TicketCreateParams = {
  resource: 'ticket';
  operation: 'create';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    ticketType?: string | Expression<string>;
/**
 * Summary
 */
    summary?: string | Expression<string> | PlaceholderValue;
/**
 * Details
 */
    details?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    agent_id?: string | Expression<string>;
    /** Start Date
     */
    startdate?: string | Expression<string>;
    /** Target Date
     */
    targetdate?: string | Expression<string>;
  };
};

export type HaloPSAV1TicketCreateNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1TicketCreateParams>;
};