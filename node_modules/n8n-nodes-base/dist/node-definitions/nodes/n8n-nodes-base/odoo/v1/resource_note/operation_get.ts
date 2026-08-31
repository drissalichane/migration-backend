/**
 * Odoo Node - Version 1
 * Discriminator: resource=note, operation=get
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Get an item */
export type OdooV1NoteGetParams = {
  resource: 'note';
  operation: 'get';
/**
 * Note ID
 */
    noteId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    fieldsList?: string[];
  };
};

export type OdooV1NoteGetNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1NoteGetParams>;
};