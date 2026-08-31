/**
 * Keap Node - Version 1
 * Discriminator: resource=contactNote, operation=delete
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Delete an contact */
export type KeapV1ContactNoteDeleteParams = {
  resource: 'contactNote';
  operation: 'delete';
/**
 * Note ID
 */
    noteId?: string | Expression<string> | PlaceholderValue;
};

export type KeapV1ContactNoteDeleteNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1ContactNoteDeleteParams>;
};