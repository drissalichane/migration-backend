/**
 * Keap Node - Version 1
 * Discriminator: resource=contactNote, operation=get
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Retrieve an contact */
export type KeapV1ContactNoteGetParams = {
  resource: 'contactNote';
  operation: 'get';
/**
 * Note ID
 */
    noteId?: string | Expression<string> | PlaceholderValue;
};

export type KeapV1ContactNoteGetNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1ContactNoteGetParams>;
};