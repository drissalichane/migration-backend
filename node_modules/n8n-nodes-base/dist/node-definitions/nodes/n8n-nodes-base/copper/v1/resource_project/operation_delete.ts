/**
 * Copper Node - Version 1
 * Discriminator: resource=project, operation=delete
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1ProjectDeleteParams = {
  resource: 'project';
  operation: 'delete';
/**
 * ID of the project to delete
 */
    projectId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1ProjectDeleteNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1ProjectDeleteParams>;
};