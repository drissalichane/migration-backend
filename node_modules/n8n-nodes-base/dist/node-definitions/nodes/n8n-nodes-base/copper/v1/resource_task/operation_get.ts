/**
 * Copper Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * ID of the task to retrieve
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1TaskGetNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1TaskGetParams>;
};