/**
 * Odoo Node - Version 1
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Delete an item */
export type OdooV1ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * Contact ID
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type OdooV1ContactDeleteNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1ContactDeleteParams>;
};