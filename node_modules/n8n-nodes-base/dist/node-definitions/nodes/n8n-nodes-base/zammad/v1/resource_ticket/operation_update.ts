/**
 * Zammad Node - Version 1
 * Discriminator: resource=ticket, operation=update
 */


interface Credentials {
  zammadBasicAuthApi: CredentialReference;
  zammadTokenAuthApi: CredentialReference;
}

/** Update a group */
export type ZammadV1TicketUpdateParams = {
  resource: 'ticket';
  operation: 'update';
  authentication?: 'basicAuth' | 'tokenAuth' | Expression<string>;
/**
 * Ticket to update. Specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Title of the ticket
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Group that will own the ticket. Choose from the list, or specify a name using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    group?: string | Expression<string>;
    /** State of the ticket. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    state_id?: string | Expression<string>;
    /** Date and time when the pending ticket should be activated (required for pending reminder, pending close, and snooze states)
     */
    pending_time?: string | Expression<string>;
    /** Priority of the ticket. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    priority_id?: string | Expression<string>;
    /** Agent responsible for the ticket. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner_id?: string | Expression<string>;
    /** Customer associated with the ticket. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    customer_id?: string | Expression<string>;
    /** Internal note for the ticket
     */
    note?: string | Expression<string> | PlaceholderValue;
    /** Custom Fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldPairs?: Array<{
      /** Internal name of the custom field to set. Choose from the list, or specify a name using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      name?: string | Expression<string>;
      /** Value to set on the custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type ZammadV1TicketUpdateNode = {
  type: 'n8n-nodes-base.zammad';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZammadV1TicketUpdateParams>;
};