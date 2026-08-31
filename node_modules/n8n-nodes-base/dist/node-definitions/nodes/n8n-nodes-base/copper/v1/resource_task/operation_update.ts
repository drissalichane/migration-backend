/**
 * Copper Node - Version 1
 * Discriminator: resource=task, operation=update
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1TaskUpdateParams = {
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
    /** ID of the user who will own the task
     */
    assignee_id?: string | Expression<string> | PlaceholderValue;
    /** Description to set for the task
     */
    details?: string | Expression<string> | PlaceholderValue;
    /** Name to set for the task
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Priority
     * @default High
     */
    priority?: 'High' | 'None' | Expression<string>;
    /** Status
     * @default Open
     */
    status?: 'Completed' | 'Open' | Expression<string>;
  };
};

export type CopperV1TaskUpdateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1TaskUpdateParams>;
};