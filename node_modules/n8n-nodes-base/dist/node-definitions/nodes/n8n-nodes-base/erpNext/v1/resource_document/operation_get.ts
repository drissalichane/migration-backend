/**
 * ERPNext Node - Version 1
 * Discriminator: resource=document, operation=get
 */


interface Credentials {
  erpNextApi: CredentialReference;
}

/** Retrieve a document */
export type ErpNextV1DocumentGetParams = {
  resource: 'document';
  operation: 'get';
/**
 * The type of document you would like to get. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docType?: string | Expression<string>;
/**
 * The name (ID) of document you would like to get
 */
    documentName?: string | Expression<string> | PlaceholderValue;
};

export type ErpNextV1DocumentGetNode = {
  type: 'n8n-nodes-base.erpNext';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ErpNextV1DocumentGetParams>;
};