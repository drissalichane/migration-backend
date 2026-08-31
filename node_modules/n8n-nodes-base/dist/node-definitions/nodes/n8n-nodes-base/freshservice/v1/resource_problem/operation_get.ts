/**
 * Freshservice Node - Version 1
 * Discriminator: resource=problem, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1ProblemGetParams = {
  resource: 'problem';
  operation: 'get';
/**
 * ID of the problem to retrieve
 */
    problemId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1ProblemGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ProblemGetParams>;
};