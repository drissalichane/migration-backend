/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=tag, operation=get
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Retrieve an activity */
export type MonicaCrmV1TagGetParams = {
  resource: 'tag';
  operation: 'get';
/**
 * ID of the tag to retrieve
 */
    tagId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1TagGetNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1TagGetParams>;
};