/**
 * Zammad Node - Version 1
 * Discriminator: resource=ticket, operation=create
 */


interface Credentials {
  zammadBasicAuthApi: CredentialReference;
  zammadTokenAuthApi: CredentialReference;
}

/** Create a group */
export type ZammadV1TicketCreateParams = {
  resource: 'ticket';
  operation: 'create';
  authentication?: 'basicAuth' | 'tokenAuth' | Expression<string>;
/**
 * Title of the ticket to create
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Group that will own the ticket to create. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    group?: string | Expression<string>;
/**
 * Email address of the customer concerned in the ticket to create. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    customer?: string | Expression<string>;
/**
 * Article
 * @default {}
 */
    article?: {
        /** Article Details
     */
    articleDetails?: {
      /** Subject
       */
      subject?: string | Expression<string> | PlaceholderValue;
      /** Body
       */
      body?: string | Expression<string> | PlaceholderValue;
      /** Visibility
       * @default internal
       */
      visibility?: 'external' | 'internal' | Expression<string>;
      /** Sender
       * @default Agent
       */
      sender?: 'Agent' | 'Customer' | 'System' | Expression<string>;
      /** Article Type
       * @default note
       */
      type?: 'chat' | 'email' | 'fax' | 'note' | 'phone' | 'sms' | Expression<string>;
      /** Reply To
       */
      reply_to?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
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

export type ZammadV1TicketCreateNode = {
  type: 'n8n-nodes-base.zammad';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZammadV1TicketCreateParams>;
};