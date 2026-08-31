/**
 * Freshservice Node - Version 1
 * Discriminator: resource=agentGroup, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1AgentGroupGetParams = {
  resource: 'agentGroup';
  operation: 'get';
/**
 * ID of the agent group to retrieve
 */
    agentGroupId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1AgentGroupGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1AgentGroupGetParams>;
};