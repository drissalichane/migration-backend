/**
 * Freshservice Node - Version 1
 * Discriminator: resource=ticket, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1TicketUpdateParams = {
  resource: 'ticket';
  operation: 'update';
/**
 * ID of the ticket to update
 */
    ticketId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the department to which this ticket has been assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    department_id?: string | Expression<string>;
    /** HTML supported
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Email address of the ticket author
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** ID of the group to which the ticket has been assigned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    group_id?: string | Expression<string>;
    /** Impact
     * @default 1
     */
    impact?: 1 | 2 | 3 | Expression<number>;
    /** Name of the ticket author
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Priority of the ticket
     * @default 1
     */
    priority?: 1 | 2 | 3 | 4 | Expression<number>;
    /** Status
     * @default 2
     */
    status?: 2 | 3 | 4 | 5 | Expression<number>;
    /** Subject
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1TicketUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1TicketUpdateParams>;
};