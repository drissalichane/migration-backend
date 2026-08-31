/**
 * ERPNext Node - Version 1
 * Discriminator: resource=document, operation=delete
 */


interface Credentials {
  erpNextApi: CredentialReference;
}

/** Delete a document */
export type ErpNextV1DocumentDeleteParams = {
  resource: 'document';
  operation: 'delete';
/**
 * The type of document you would like to delete. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docType?: string | Expression<string>;
/**
 * The name (ID) of document you would like to get
 */
    documentName?: string | Expression<string> | PlaceholderValue;
};

export type ErpNextV1DocumentDeleteNode = {
  type: 'n8n-nodes-base.erpNext';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ErpNextV1DocumentDeleteParams>;
};