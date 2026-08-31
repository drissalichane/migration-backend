/**
 * Salesforce Node - Version 1
 * Discriminator: resource=lead, operation=addNote
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a prospect or potential */
export type SalesforceV1LeadAddNoteParams = {
  resource: 'lead';
  operation: 'addNote';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * ID of lead that needs to be fetched
 */
    leadId?: string | Expression<string> | PlaceholderValue;
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
    owner?: string | Expression<string>;
  };
};

export type SalesforceV1LeadAddNoteOutput = {
  id?: string;
  success?: boolean;
};

export type SalesforceV1LeadAddNoteNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1LeadAddNoteParams>;
  output?: Items<SalesforceV1LeadAddNoteOutput>;
};