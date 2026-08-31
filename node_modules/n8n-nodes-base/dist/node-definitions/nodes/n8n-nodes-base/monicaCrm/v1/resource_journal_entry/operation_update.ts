/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=journalEntry, operation=update
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Update an activity */
export type MonicaCrmV1JournalEntryUpdateParams = {
  resource: 'journalEntry';
  operation: 'update';
/**
 * ID of the journal entry to update
 */
    journalId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Content of the journal entry - max 100,000 characters
     */
    post?: string | Expression<string> | PlaceholderValue;
    /** Title of the journal entry - max 250 characters
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type MonicaCrmV1JournalEntryUpdateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1JournalEntryUpdateParams>;
};