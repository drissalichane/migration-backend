/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=case, operation=executeResponder
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1CaseExecuteResponderParams = {
  resource: 'case';
  operation: 'executeResponder';
/**
 * Case
 * @default {"mode":"list","value":""}
 */
    id?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.hide { id: [""] }
 */
    responder?: string | Expression<string>;
};

export type TheHiveProjectV1CaseExecuteResponderNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1CaseExecuteResponderParams>;
};