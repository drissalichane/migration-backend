/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=note, operation=update
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Update an activity */
export type MonicaCrmV1NoteUpdateParams = {
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
    /** Body of the note - max 100,000 characters
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** ID of the contact to associate the note with
     */
    contact_id?: string | Expression<string> | PlaceholderValue;
    /** Whether the note has been favorited
     * @default false
     */
    is_favorited?: boolean | Expression<boolean>;
  };
};

export type MonicaCrmV1NoteUpdateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1NoteUpdateParams>;
};