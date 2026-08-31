/**
 * TheHive Node - Version 1
 * Discriminator: resource=log, operation=executeResponder
 */


interface Credentials {
  theHiveApi: CredentialReference;
}

/** Execute a responder on a selected log */
export type TheHiveV1LogExecuteResponderParams = {
  resource: 'log';
  operation: 'executeResponder';
/**
 * Log ID
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { id: [""] }
 */
    responder?: string | Expression<string>;
};

export type TheHiveV1LogExecuteResponderNode = {
  type: 'n8n-nodes-base.theHive';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveV1LogExecuteResponderParams>;
};