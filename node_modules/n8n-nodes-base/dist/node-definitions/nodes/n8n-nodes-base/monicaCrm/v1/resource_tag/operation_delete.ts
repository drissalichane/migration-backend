/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=tag, operation=delete
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Delete an activity */
export type MonicaCrmV1TagDeleteParams = {
  resource: 'tag';
  operation: 'delete';
/**
 * ID of the tag to delete
 */
    tagId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1TagDeleteNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1TagDeleteParams>;
};