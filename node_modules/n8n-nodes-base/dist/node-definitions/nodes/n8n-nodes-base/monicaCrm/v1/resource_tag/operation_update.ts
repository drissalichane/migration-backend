/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=tag, operation=update
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Update an activity */
export type MonicaCrmV1TagUpdateParams = {
  resource: 'tag';
  operation: 'update';
/**
 * ID of the tag to update
 */
    tagId?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the tag - max 250 characters
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1TagUpdateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1TagUpdateParams>;
};