/**
 * GetResponse Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  getResponseApi: CredentialReference;
  getResponseOAuth2Api: CredentialReference;
}

/** Create a new contact */
export type GetResponseV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Email
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    campaignId?: string | Expression<string>;
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
    customFieldValues?: Array<{
      /** The end user specified key of the user defined data. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      customFieldId?: string | Expression<string>;
      /** The end user specified value of the user defined data
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The day on which the contact is in the Autoresponder cycle. null indicates the contacts is not in the cycle.
     */
    dayOfCycle?: string | Expression<string> | PlaceholderValue;
    /** The contact's IP address. IPv4 and IPv6 formats are accepted.
     */
    ipAddress?: string | Expression<string> | PlaceholderValue;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Note
     */
    note?: string | Expression<string> | PlaceholderValue;
    /** Contact scoring, pass null to remove the score from a contact
     */
    scoring?: number | Expression<number>;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
  };
};

export type GetResponseV1ContactCreateOutput = {
  success?: boolean;
};

export type GetResponseV1ContactCreateNode = {
  type: 'n8n-nodes-base.getResponse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GetResponseV1ContactCreateParams>;
  output?: Items<GetResponseV1ContactCreateOutput>;
};