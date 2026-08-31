/**
 * Coda Node - Version 1
 * Discriminator: resource=control, operation=get
 */


interface Credentials {
  codaApi: CredentialReference;
}

/** Controls provide a user-friendly way to input a value that can affect other parts of the doc */
export type CodaV1ControlGetParams = {
  resource: 'control';
  operation: 'get';
/**
 * ID of the doc. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docId?: string | Expression<string>;
/**
 * The control to get the row from
 */
    controlId?: string | Expression<string> | PlaceholderValue;
};

export type CodaV1ControlGetNode = {
  type: 'n8n-nodes-base.coda';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CodaV1ControlGetParams>;
};