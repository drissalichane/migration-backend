/**
 * Coda Node - Version 1.1
 * Discriminator: resource=view, operation=pushViewButton
 */


interface Credentials {
  codaApi: CredentialReference;
}

/** Access data of views in documents */
export type CodaV11ViewPushViewButtonParams = {
  resource: 'view';
  operation: 'pushViewButton';
/**
 * ID of the doc. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docId?: string | Expression<string>;
/**
 * The view to get the row from. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    viewId?: string | Expression<string>;
/**
 * The view to get the row from. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    rowId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    columnId?: string | Expression<string>;
};

export type CodaV11ViewPushViewButtonNode = {
  type: 'n8n-nodes-base.coda';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<CodaV11ViewPushViewButtonParams>;
};