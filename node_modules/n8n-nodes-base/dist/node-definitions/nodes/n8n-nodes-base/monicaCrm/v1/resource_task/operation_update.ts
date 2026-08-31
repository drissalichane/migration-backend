/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=task, operation=update
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Update an activity */
export type MonicaCrmV1TaskUpdateParams = {
  resource: 'task';
  operation: 'update';
/**
 * ID of the task to update
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the contact to associate the task with
     */
    contactId?: string | Expression<string> | PlaceholderValue;
    /** Whether the task has been completed
     * @default false
     */
    completed?: boolean | Expression<boolean>;
    /** Description of the task - max 100,000 characters
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Title of the task entry - max 250 characters
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type MonicaCrmV1TaskUpdateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1TaskUpdateParams>;
};