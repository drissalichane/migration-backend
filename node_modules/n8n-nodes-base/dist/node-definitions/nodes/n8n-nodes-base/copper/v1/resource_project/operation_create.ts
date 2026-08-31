/**
 * Copper Node - Version 1
 * Discriminator: resource=project, operation=create
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1ProjectCreateParams = {
  resource: 'project';
  operation: 'create';
/**
 * Name of the project to create
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the user who will own the project to create
     */
    assignee_id?: string | Expression<string> | PlaceholderValue;
    /** Description of the project to create
     */
    details?: string | Expression<string> | PlaceholderValue;
    /** Status
     * @default Open
     */
    status?: 'Completed' | 'Open' | Expression<string>;
  };
};

export type CopperV1ProjectCreateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1ProjectCreateParams>;
};