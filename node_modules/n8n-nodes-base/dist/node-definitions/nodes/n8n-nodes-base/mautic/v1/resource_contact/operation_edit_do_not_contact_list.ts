/**
 * Mautic Node - Version 1
 * Discriminator: resource=contact, operation=editDoNotContactList
 */


interface Credentials {
  mauticApi: CredentialReference;
  mauticOAuth2Api: CredentialReference;
}

/** Create & modify contacts */
export type MauticV1ContactEditDoNotContactListParams = {
  resource: 'contact';
  operation: 'editDoNotContactList';
  authentication?: 'credentials' | 'oAuth2' | Expression<string>;
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Action
 * @default add
 */
    action?: 'add' | 'remove' | Expression<string>;
/**
 * Channel
 * @default email
 */
    channel?: 'email' | 'sms' | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Reason To Do Not Contact
     * @default 3
     */
    reason?: '1' | '2' | '3' | Expression<string>;
    /** A text describing details of Do Not Contact entry
     */
    comments?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** String or search command to filter entities by
     * @displayOptions.show { /operation: ["getAll"] }
     */
    search?: string | Expression<string> | PlaceholderValue;
    /** Column to sort by. Can use any column listed in the response.
     * @displayOptions.show { /operation: ["getAll"] }
     */
    orderBy?: string | Expression<string> | PlaceholderValue;
    /** Sort direction: ASC or DESC
     * @displayOptions.show { /operation: ["getAll"] }
     */
    orderByDir?: 'asc' | 'desc' | Expression<string>;
    /** Whether to return currently published entities
     * @displayOptions.show { /operation: ["getAll"] }
     * @default false
     */
    publishedOnly?: boolean | Expression<boolean>;
    /** Whether to return array of entities without additional lists in it
     * @displayOptions.show { /operation: ["getAll"] }
     * @default false
     */
    minimal?: boolean | Expression<boolean>;
    /** By default only the data of the fields get returned. If this options gets set the RAW response with all data gets returned.
     * @default true
     */
    rawData?: boolean | Expression<boolean>;
  };
};

export type MauticV1ContactEditDoNotContactListNode = {
  type: 'n8n-nodes-base.mautic';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MauticV1ContactEditDoNotContactListParams>;
};