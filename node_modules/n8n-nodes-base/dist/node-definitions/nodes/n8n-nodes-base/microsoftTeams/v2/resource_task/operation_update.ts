/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=task, operation=update
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Update a channel */
export type MicrosoftTeamsV2TaskUpdateParams = {
  resource: 'task';
  operation: 'update';
/**
 * The ID of the task to update
 */
    taskId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Who the task should be assigned to
     * @hint Select 'Team' from options first
     * @default {"mode":"list","value":""}
     */
    assignedTo?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** The bucket for the task to belong to
     * @default {"mode":"list","value":""}
     */
    bucketId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.
     */
    dueDateTime?: string | Expression<string> | PlaceholderValue;
    /** Team
     * @default {"mode":"list","value":""}
     */
    groupId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Percentage of task completion. When set to 100, the task is considered completed.
     * @default 0
     */
    percentComplete?: number | Expression<number>;
    /** The plan for the task to belong to
     * @hint Select 'Team' from options first
     * @default {"mode":"list","value":""}
     */
    planId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Title of the task
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftTeamsV2TaskUpdateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2TaskUpdateParams>;
};