/**
 * Freshservice Node - Version 1
 * Discriminator: resource=agentRole, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1AgentRoleGetParams = {
  resource: 'agentRole';
  operation: 'get';
/**
 * ID of the agent role to retrieve
 */
    agentRoleId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1AgentRoleGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1AgentRoleGetParams>;
};