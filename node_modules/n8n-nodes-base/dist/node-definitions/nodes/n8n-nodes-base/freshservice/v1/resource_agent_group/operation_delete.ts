/**
 * Freshservice Node - Version 1
 * Discriminator: resource=agentGroup, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1AgentGroupDeleteParams = {
  resource: 'agentGroup';
  operation: 'delete';
/**
 * ID of the agent group to delete
 */
    agentGroupId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1AgentGroupDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1AgentGroupDeleteParams>;
};