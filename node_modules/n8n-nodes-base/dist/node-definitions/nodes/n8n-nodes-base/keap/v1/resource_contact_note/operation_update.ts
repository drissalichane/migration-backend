/**
 * Keap Node - Version 1
 * Discriminator: resource=contactNote, operation=update
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Update a note */
export type KeapV1ContactNoteUpdateParams = {
  resource: 'contactNote';
  operation: 'update';
/**
 * Note ID
 */
    noteId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Body
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** Contact ID
     * @default 0
     */
    contactId?: number | Expression<number>;
    /** Title
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Type
     */
    type?: 'appointment' | 'call' | 'email' | 'fax' | 'letter' | 'other' | Expression<string>;
    /** The infusionsoft user to create the note on behalf of. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    userId?: string | Expression<string>;
  };
};

export type KeapV1ContactNoteUpdateNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1ContactNoteUpdateParams>;
};