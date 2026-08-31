/**
 * Odoo Node - Version 1
 * Discriminator: resource=custom, operation=create
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Create a new item */
export type OdooV1CustomCreateParams = {
  resource: 'custom';
  operation: 'create';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    customResource?: string | Expression<string>;
/**
 * Fields
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

export type OdooV1CustomCreateOutput = {
  id?: number;
};

export type OdooV1CustomCreateNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1CustomCreateParams>;
  output?: Items<OdooV1CustomCreateOutput>;
};