/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=note, operation=get
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Retrieve an activity */
export type MonicaCrmV1NoteGetParams = {
  resource: 'note';
  operation: 'get';
/**
 * ID of the note to retrieve
 */
    noteId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1NoteGetNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1NoteGetParams>;
};