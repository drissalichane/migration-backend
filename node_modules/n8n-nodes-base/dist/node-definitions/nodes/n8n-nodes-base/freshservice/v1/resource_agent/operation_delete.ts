/**
 * Freshservice Node - Version 1
 * Discriminator: resource=agent, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1AgentDeleteParams = {
  resource: 'agent';
  operation: 'delete';
/**
 * ID of the agent to delete
 */
    agentId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1AgentDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1AgentDeleteParams>;
};