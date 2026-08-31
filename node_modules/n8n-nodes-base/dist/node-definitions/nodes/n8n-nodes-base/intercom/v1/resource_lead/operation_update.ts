/**
 * Intercom Node - Version 1
 * Discriminator: resource=lead, operation=update
 */


interface Credentials {
  intercomApi: CredentialReference;
}

/** Leads are useful for representing logged-out users of your application */
export type IntercomV1LeadUpdateParams = {
  resource: 'lead';
  operation: 'update';
/**
 * The property via which to query the lead
 * @default id
 */
    updateBy?: 'userId' | 'id' | Expression<string>;
/**
 * Value of the property to identify the lead to update
 */
    value?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** An avatar image URL. note: the image URL needs to be https.
     */
    avatar?: string | Expression<string> | PlaceholderValue;
    /** Identifies the companies this user belongs to. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    companies?: string[];
    /** The email of the user
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Name of the user
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The phone number of the user
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Whether the Lead is unsubscribed from emails
     * @default false
     */
    unsubscribedFromEmails?: boolean | Expression<boolean>;
    /** Whether to instruct Intercom to update the users last_request_at value to the current API service time in UTC. default value if not sent is false.
     * @default false
     */
    updateLastRequestAt?: boolean | Expression<boolean>;
    /** Identifies a specific product promotion or strategic campaign
     */
    utmCampaign?: string | Expression<string> | PlaceholderValue;
    /** Identifies what specifically was clicked to bring the user to the site
     */
    utmContent?: string | Expression<string> | PlaceholderValue;
    /** Identifies what type of link was used
     */
    utmMedium?: string | Expression<string> | PlaceholderValue;
    /** An avatar image URL. note: the image URL needs to be https.
     */
    utmSource?: string | Expression<string> | PlaceholderValue;
    /** Identifies search terms
     */
    utmTerm?: string | Expression<string> | PlaceholderValue;
  };
/**
 * A hash of key/value pairs to represent custom data you want to attribute to a user
 * @displayOptions.show { jsonParameters: [true] }
 */
    customAttributesJson?: IDataObject | string | Expression<string>;
/**
 * A hash of key/value pairs to represent custom data you want to attribute to a user
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    customAttributesUi?: {
        /** Attributes
     */
    customAttributesValues?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type IntercomV1LeadUpdateNode = {
  type: 'n8n-nodes-base.intercom';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IntercomV1LeadUpdateParams>;
};