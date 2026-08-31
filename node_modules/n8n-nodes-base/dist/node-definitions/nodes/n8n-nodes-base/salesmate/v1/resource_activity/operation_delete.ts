/**
 * Salesmate Node - Version 1
 * Discriminator: resource=activity, operation=delete
 */


interface Credentials {
  salesmateApi: CredentialReference;
}

/** Delete a company */
export type SalesmateV1ActivityDeleteParams = {
  resource: 'activity';
  operation: 'delete';
/**
 * If more than one activity add them separated by ,
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type SalesmateV1ActivityDeleteNode = {
  type: 'n8n-nodes-base.salesmate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesmateV1ActivityDeleteParams>;
};