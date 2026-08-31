/**
 * Copper Node - Version 1
 * Discriminator: resource=project, operation=update
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1ProjectUpdateParams = {
  resource: 'project';
  operation: 'update';
/**
 * ID of the project to update
 */
    projectId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the user who will own the project
     */
    assignee_id?: string | Expression<string> | PlaceholderValue;
    /** Description to set for the project
     */
    details?: string | Expression<string> | PlaceholderValue;
    /** Name to set for the project
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Status
     * @default Open
     */
    status?: 'Completed' | 'Open' | Expression<string>;
  };
};

export type CopperV1ProjectUpdateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1ProjectUpdateParams>;
};