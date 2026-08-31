/**
 * ClickUp Node - Version 1
 * Discriminator: resource=goal, operation=update
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Update a checklist */
export type ClickUpV1GoalUpdateParams = {
  resource: 'goal';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Goal ID
 */
    goal?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Add Owners
     */
    addOwners?: string | Expression<string> | PlaceholderValue;
    /** Color
     */
    color?: string | Expression<string>;
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Due Date
     */
    dueDate?: string | Expression<string>;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Remove Owners
     */
    removeOwners?: string | Expression<string> | PlaceholderValue;
  };
};

export type ClickUpV1GoalUpdateNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1GoalUpdateParams>;
};