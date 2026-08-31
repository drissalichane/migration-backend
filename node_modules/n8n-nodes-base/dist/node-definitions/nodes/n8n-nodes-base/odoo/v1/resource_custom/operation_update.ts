/**
 * Odoo Node - Version 1
 * Discriminator: resource=custom, operation=update
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Update an item */
export type OdooV1CustomUpdateParams = {
  resource: 'custom';
  operation: 'update';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    customResource?: string | Expression<string>;
/**
 * Custom Resource ID
 */
    customResourceId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    fieldsToCreateOrUpdate?: {
        /** Field Record:
     */
    fields?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      fieldName?: string | Expression<string>;
      /** New Value
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type OdooV1CustomUpdateNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1CustomUpdateParams>;
};