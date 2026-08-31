/**
 * Freshservice Node - Version 1
 * Discriminator: resource=problem, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1ProblemDeleteParams = {
  resource: 'problem';
  operation: 'delete';
/**
 * ID of the problem to delete
 */
    problemId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1ProblemDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ProblemDeleteParams>;
};