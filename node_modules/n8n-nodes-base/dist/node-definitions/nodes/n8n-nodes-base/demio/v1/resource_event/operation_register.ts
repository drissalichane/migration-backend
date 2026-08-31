/**
 * Demio Node - Version 1
 * Discriminator: resource=event, operation=register
 */


interface Credentials {
  demioApi: CredentialReference;
}

/** Register someone to an event */
export type DemioV1EventRegisterParams = {
  resource: 'event';
  operation: 'register';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    eventId?: string | Expression<string>;
/**
 * The registrant's first name
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * The registrant's email address
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The value for the predefined Company field
     */
    company?: string | Expression<string> | PlaceholderValue;
    /** Custom Fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** Each custom field's unique identifier can be found within the Event's Registration block in the Customize tab
       */
      fieldId?: string | Expression<string> | PlaceholderValue;
      /** The value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Event Registration page URL. It can be useful when you do not know Event ID, but have Event link.
     */
    ref_url?: string | Expression<string> | PlaceholderValue;
    /** The value for the predefined GDPR field
     */
    gdpr?: string | Expression<string> | PlaceholderValue;
    /** The value for the predefined Last Name field
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** The value for the predefined Phone Number field
     */
    phone_number?: string | Expression<string> | PlaceholderValue;
    /** Event Session ID. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    date_id?: string | Expression<string>;
    /** The value for the predefined Website field
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
};

export type DemioV1EventRegisterNode = {
  type: 'n8n-nodes-base.demio';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DemioV1EventRegisterParams>;
};