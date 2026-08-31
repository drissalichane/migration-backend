/**
 * ClickUp Node - Version 1
 * Discriminator: resource=goalKeyResult, operation=update
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Update a checklist */
export type ClickUpV1GoalKeyResultUpdateParams = {
  resource: 'goalKeyResult';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Key Result ID
 */
    keyResult?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Note
     */
    note?: string | Expression<string> | PlaceholderValue;
    /** Steps Current
     * @default 1
     */
    stepsCurrent?: number | Expression<number>;
    /** Steps End
     * @default 0
     */
    stepsEnd?: number | Expression<number>;
    /** Steps Start
     * @default 0
     */
    stepsStart?: number | Expression<number>;
    /** Only matters for type Number and Currency. For Currency the unit must be a valid currency code.
     */
    unit?: string | Expression<string> | PlaceholderValue;
  };
};

export type ClickUpV1GoalKeyResultUpdateNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1GoalKeyResultUpdateParams>;
};