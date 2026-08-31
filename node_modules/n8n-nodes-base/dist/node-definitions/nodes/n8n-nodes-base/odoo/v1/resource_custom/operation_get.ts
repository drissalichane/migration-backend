/**
 * Odoo Node - Version 1
 * Discriminator: resource=custom, operation=get
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Get an item */
export type OdooV1CustomGetParams = {
  resource: 'custom';
  operation: 'get';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    customResource?: string | Expression<string>;
/**
 * Custom Resource ID
 */
    customResourceId?: string | Expression<string> | PlaceholderValue;
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

export type OdooV1CustomGetOutput = {
  id?: number;
  name?: string;
};

export type OdooV1CustomGetNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1CustomGetParams>;
  output?: Items<OdooV1CustomGetOutput>;
};