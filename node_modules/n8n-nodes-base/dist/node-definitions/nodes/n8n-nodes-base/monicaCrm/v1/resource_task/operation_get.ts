/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Retrieve an activity */
export type MonicaCrmV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * ID of the task to retrieve
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1TaskGetNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1TaskGetParams>;
};