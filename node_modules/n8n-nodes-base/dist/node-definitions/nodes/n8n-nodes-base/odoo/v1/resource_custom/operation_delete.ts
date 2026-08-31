/**
 * Odoo Node - Version 1
 * Discriminator: resource=custom, operation=delete
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Delete an item */
export type OdooV1CustomDeleteParams = {
  resource: 'custom';
  operation: 'delete';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    customResource?: string | Expression<string>;
/**
 * Custom Resource ID
 */
    customResourceId?: string | Expression<string> | PlaceholderValue;
};

export type OdooV1CustomDeleteOutput = {
  success?: boolean;
};

export type OdooV1CustomDeleteNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1CustomDeleteParams>;
  output?: Items<OdooV1CustomDeleteOutput>;
};