/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=contactField, operation=delete
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Delete an activity */
export type MonicaCrmV1ContactFieldDeleteParams = {
  resource: 'contactField';
  operation: 'delete';
/**
 * ID of the contactField to delete
 */
    contactFieldId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1ContactFieldDeleteNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ContactFieldDeleteParams>;
};