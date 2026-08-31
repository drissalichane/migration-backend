/**
 * Salesforce Node - Version 1
 * Discriminator: resource=account, operation=addNote
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners) */
export type SalesforceV1AccountAddNoteParams = {
  resource: 'account';
  operation: 'addNote';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * ID of account that needs to be fetched
 */
    accountId?: string | Expression<string> | PlaceholderValue;
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
    /** Whether true, only the note owner or a user with the “Modify All Data” permission can view the note or query it via the API
     * @default false
     */
    isPrivate?: boolean | Expression<boolean>;
    /** ID of the user who owns the note. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    ownerId?: string | Expression<string>;
  };
};

export type SalesforceV1AccountAddNoteNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1AccountAddNoteParams>;
};