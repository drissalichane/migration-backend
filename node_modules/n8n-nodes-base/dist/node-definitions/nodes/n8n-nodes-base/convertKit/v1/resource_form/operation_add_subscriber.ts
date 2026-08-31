/**
 * ConvertKit Node - Version 1
 * Discriminator: resource=form, operation=addSubscriber
 */


interface Credentials {
  convertKitApi: CredentialReference;
}

/** Add a subscriber */
export type ConvertKitV1FormAddSubscriberParams = {
  resource: 'form';
  operation: 'addSubscriber';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    id?: string | Expression<string>;
/**
 * The subscriber's email address
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Object of key/value pairs for custom fields (the custom field must exist before you can use it here)
     * @default {}
     */
    fieldsUi?: {
        /** Custom Field
     */
    fieldsValues?: Array<{
      /** The field's key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value of the field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The subscriber's first name
     */
    firstName?: string | Expression<string> | PlaceholderValue;
  };
};

export type ConvertKitV1FormAddSubscriberOutput = {
  created_at?: string;
  id?: number;
  referrer?: null;
  state?: string;
  subscribable_id?: number;
  subscribable_type?: string;
  subscriber?: {
    created_at?: string;
    email_address?: string;
    id?: number;
    state?: string;
  };
};

export type ConvertKitV1FormAddSubscriberNode = {
  type: 'n8n-nodes-base.convertKit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ConvertKitV1FormAddSubscriberParams>;
  output?: Items<ConvertKitV1FormAddSubscriberOutput>;
};