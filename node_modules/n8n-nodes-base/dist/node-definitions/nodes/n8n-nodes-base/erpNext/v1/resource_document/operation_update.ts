/**
 * ERPNext Node - Version 1
 * Discriminator: resource=document, operation=update
 */


interface Credentials {
  erpNextApi: CredentialReference;
}

/** Update a document */
export type ErpNextV1DocumentUpdateParams = {
  resource: 'document';
  operation: 'update';
/**
 * The type of document you would like to update. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docType?: string | Expression<string>;
/**
 * The name (ID) of document you would like to get
 */
    documentName?: string | Expression<string> | PlaceholderValue;
/**
 * Properties of request body
 * @default {}
 */
    properties?: {
        /** Property
     */
    customProperty?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      field?: string | Expression<string>;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type ErpNextV1DocumentUpdateNode = {
  type: 'n8n-nodes-base.erpNext';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ErpNextV1DocumentUpdateParams>;
};