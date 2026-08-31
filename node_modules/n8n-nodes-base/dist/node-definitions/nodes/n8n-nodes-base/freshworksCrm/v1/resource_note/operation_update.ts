/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=note, operation=update
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Update an account */
export type FreshworksCrmV1NoteUpdateParams = {
  resource: 'note';
  operation: 'update';
/**
 * ID of the note to update
 */
    noteId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Content of the note
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** ID of the entity for which the note is updated
     */
    targetable_id?: string | Expression<string> | PlaceholderValue;
    /** Type of the entity for which the note is updated
     * @default Contact
     */
    targetable_type?: 'Contact' | 'Deal' | 'SalesAccount' | Expression<string>;
  };
};

export type FreshworksCrmV1NoteUpdateNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1NoteUpdateParams>;
};