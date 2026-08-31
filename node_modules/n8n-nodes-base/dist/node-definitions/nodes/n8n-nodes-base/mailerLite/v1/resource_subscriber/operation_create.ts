/**
 * MailerLite Node - Version 1
 * Discriminator: resource=subscriber, operation=create
 */


interface Credentials {
  mailerLiteApi: CredentialReference;
}

/** Create a new subscriber */
export type MailerLiteV1SubscriberCreateParams = {
  resource: 'subscriber';
  operation: 'create';
/**
 * Email of new subscriber
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Confirmation Timestamp
     */
    confirmation_timestamp?: string | Expression<string> | PlaceholderValue;
    /** Confirmation IP
     */
    confirmation_ip?: string | Expression<string> | PlaceholderValue;
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
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Whether to reactivate subscriber
     * @default false
     */
    resubscribe?: boolean | Expression<boolean>;
    /** Signup IP
     */
    signup_ip?: string | Expression<string> | PlaceholderValue;
    /** Signup Timestamp
     */
    signup_timestamp?: string | Expression<string> | PlaceholderValue;
    /** Type
     */
    type?: 'active' | 'unsubscribed' | 'unconfirmed' | Expression<string>;
  };
};

export type MailerLiteV1SubscriberCreateNode = {
  type: 'n8n-nodes-base.mailerLite';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MailerLiteV1SubscriberCreateParams>;
};