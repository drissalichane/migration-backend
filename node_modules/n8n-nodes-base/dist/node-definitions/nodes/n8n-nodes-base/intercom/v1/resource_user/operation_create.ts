/**
 * Intercom Node - Version 1
 * Discriminator: resource=user, operation=create
 */


interface Credentials {
  intercomApi: CredentialReference;
}

/** The Users resource is the primary way of interacting with Intercom */
export type IntercomV1UserCreateParams = {
  resource: 'user';
  operation: 'create';
/**
 * Unique string identifier
 */
    identifierType?: 'userId' | 'email' | Expression<string>;
/**
 * Unique string identifier value
 */
    idValue?: string | Expression<string> | PlaceholderValue;
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
    /** Email of the user
     * @displayOptions.show { /operation: ["update"] }
     * @displayOptions.hide { /updateBy: ["email"] }
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Name of the user
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The phone number of the user
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** How many sessions the user has recorded
     * @default false
     */
    sessionCount?: number | Expression<number>;
    /** Email of the user
     * @displayOptions.show { /operation: ["update"] }
     * @displayOptions.hide { /updateBy: ["email", "userId"] }
     */
    userId?: string | Expression<string> | PlaceholderValue;
    /** Whether the user is unsubscribed from emails
     * @default false
     */
    unsubscribedFromEmails?: boolean | Expression<boolean>;
    /** Whether to instruct Intercom to update the users last_request_at value to the current API service time in UTC
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

export type IntercomV1UserCreateNode = {
  type: 'n8n-nodes-base.intercom';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IntercomV1UserCreateParams>;
};