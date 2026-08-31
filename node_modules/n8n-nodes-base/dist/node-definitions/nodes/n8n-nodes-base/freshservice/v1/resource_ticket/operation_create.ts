/**
 * Freshservice Node - Version 1
 * Discriminator: resource=ticket, operation=create
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Create an agent */
export type FreshserviceV1TicketCreateParams = {
  resource: 'ticket';
  operation: 'create';
/**
 * Email address of the ticket author
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Subject
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * HTML supported
 */
    description?: string | Expression<string> | PlaceholderValue;
/**
 * Priority
 * @default 1
 */
    priority?: 1 | 2 | 3 | 4 | Expression<number>;
/**
 * Status
 * @default 2
 */
    status?: 2 | 3 | 4 | 5 | Expression<number>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Comma-separated email addresses to add in the CC field of the ticket email
     */
    cc_emails?: string | Expression<string> | PlaceholderValue;
    /** ID of the department to which this ticket belongs. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    department_id?: string | Expression<string>;
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
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    requester_id?: string | Expression<string>;
  };
};

export type FreshserviceV1TicketCreateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1TicketCreateParams>;
};