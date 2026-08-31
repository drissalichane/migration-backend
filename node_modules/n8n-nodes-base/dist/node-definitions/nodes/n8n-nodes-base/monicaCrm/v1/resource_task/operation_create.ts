/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=task, operation=create
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Create an activity */
export type MonicaCrmV1TaskCreateParams = {
  resource: 'task';
  operation: 'create';
/**
 * ID of the contact to associate the task with
 */
    contactId?: string | Expression<string> | PlaceholderValue;
/**
 * Title of the task entry - max 250 characters
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Description of the task - max 100,000 characters
     */
    description?: string | Expression<string> | PlaceholderValue;
  };
};

export type MonicaCrmV1TaskCreateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1TaskCreateParams>;
};