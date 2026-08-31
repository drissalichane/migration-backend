/**
 * Salesforce Node - Version 1
 * Discriminator: resource=contact, operation=addNote
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a contact, which is an individual associated with an account */
export type SalesforceV1ContactAddNoteParams = {
  resource: 'contact';
  operation: 'addNote';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * ID of contact that needs to be fetched
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Title of the note
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Body of the note. Limited to 32 KB.
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** Whether only the note owner or a user with the “Modify All Data” permission can view the note or query it via the API
     * @default false
     */
    isPrivate?: boolean | Expression<boolean>;
    /** ID of the user who owns the note. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner?: string | Expression<string>;
  };
};

export type SalesforceV1ContactAddNoteNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1ContactAddNoteParams>;
};