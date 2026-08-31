/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=journalEntry, operation=delete
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Delete an activity */
export type MonicaCrmV1JournalEntryDeleteParams = {
  resource: 'journalEntry';
  operation: 'delete';
/**
 * ID of the journal entry to delete
 */
    journalId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1JournalEntryDeleteNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1JournalEntryDeleteParams>;
};