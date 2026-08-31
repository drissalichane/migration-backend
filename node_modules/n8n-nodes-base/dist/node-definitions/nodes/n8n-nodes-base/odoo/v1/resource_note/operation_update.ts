/**
 * Odoo Node - Version 1
 * Discriminator: resource=note, operation=update
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Update an item */
export type OdooV1NoteUpdateParams = {
  resource: 'note';
  operation: 'update';
/**
 * Note ID
 */
    noteId?: string | Expression<string> | PlaceholderValue;
/**
 * Memo
 */
    memo?: string | Expression<string> | PlaceholderValue;
};

export type OdooV1NoteUpdateNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1NoteUpdateParams>;
};