/**
 * ERPNext Node - Version 1
 * Discriminator: resource=document, operation=create
 */


interface Credentials {
  erpNextApi: CredentialReference;
}

/** Create a document */
export type ErpNextV1DocumentCreateParams = {
  resource: 'document';
  operation: 'create';
/**
 * DocType you would like to create. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docType?: string | Expression<string>;
/**
 * Properties
 * @default {}
 */
    properties?: {
        /** Property
     */
    customProperty?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @default []
       */
      field?: string | Expression<string>;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type ErpNextV1DocumentCreateNode = {
  type: 'n8n-nodes-base.erpNext';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ErpNextV1DocumentCreateParams>;
};