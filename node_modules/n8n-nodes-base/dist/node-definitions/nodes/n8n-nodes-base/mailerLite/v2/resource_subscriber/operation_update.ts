/**
 * MailerLite Node - Version 2
 * Discriminator: resource=subscriber, operation=update
 */


interface Credentials {
  mailerLiteApi: CredentialReference;
}

/** Update an subscriber */
export type MailerLiteV2SubscriberUpdateParams = {
  resource: 'subscriber';
  operation: 'update';
/**
 * Email of subscriber
 */
    subscriberId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Filter by custom fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** The ID of the field to add custom field to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** The value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Status
     */
    status?: 'active' | 'bounced' | 'junk' | 'unconfirmed' | 'unsubscribed' | Expression<string>;
    /** Subscribed At
     */
    subscribed_at?: string | Expression<string>;
    /** IP Address
     */
    ip_address?: string | Expression<string> | PlaceholderValue;
    /** Opted In At
     */
    opted_in_at?: string | Expression<string>;
    /** Opt In IP
     */
    optin_ip?: string | Expression<string> | PlaceholderValue;
    /** Unsubscribed At
     */
    unsubscribed_at?: string | Expression<string>;
  };
};

export type MailerLiteV2SubscriberUpdateNode = {
  type: 'n8n-nodes-base.mailerLite';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MailerLiteV2SubscriberUpdateParams>;
};