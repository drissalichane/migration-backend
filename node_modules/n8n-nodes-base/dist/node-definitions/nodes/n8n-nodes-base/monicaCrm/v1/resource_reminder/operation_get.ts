/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=reminder, operation=get
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Retrieve an activity */
export type MonicaCrmV1ReminderGetParams = {
  resource: 'reminder';
  operation: 'get';
/**
 * ID of the reminder to retrieve
 */
    reminderId?: string | Expression<string> | PlaceholderValue;
};

export type MonicaCrmV1ReminderGetNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1ReminderGetParams>;
};