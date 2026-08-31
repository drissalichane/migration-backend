/**
 * Odoo Node - Version 1
 * Discriminator: resource=note, operation=create
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Create a new item */
export type OdooV1NoteCreateParams = {
  resource: 'note';
  operation: 'create';
/**
 * Memo
 */
    memo?: string | Expression<string> | PlaceholderValue;
};

export type OdooV1NoteCreateNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1NoteCreateParams>;
};