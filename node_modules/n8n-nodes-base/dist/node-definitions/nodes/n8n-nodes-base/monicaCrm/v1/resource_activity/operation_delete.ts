/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=activity, operation=delete
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Delete an activity */
export type MonicaCrmV1ActivityDeleteParams = {
  resource: 'activity';
  operation: 'delete';
/**
 * ID of the activity to delete
 */
    activityId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1ActivityDeleteNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ActivityDeleteParams>;
};