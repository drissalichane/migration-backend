/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=call, operation=delete
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Delete an activity */
export type MonicaCrmV1CallDeleteParams = {
  resource: 'call';
  operation: 'delete';
/**
 * ID of the call to delete
 */
    callId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1CallDeleteNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1CallDeleteParams>;
};