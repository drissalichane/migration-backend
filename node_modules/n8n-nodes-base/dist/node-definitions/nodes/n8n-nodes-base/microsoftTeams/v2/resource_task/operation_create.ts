/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=task, operation=create
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Create a channel */
export type MicrosoftTeamsV2TaskCreateParams = {
  resource: 'task';
  operation: 'create';
/**
 * Team
 * @default {"mode":"list","value":""}
 */
    groupId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * The plan for the task to belong to
 * @default {"mode":"list","value":""}
 */
    planId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * The bucket for the task to belong to
 * @default {"mode":"list","value":""}
 */
    bucketId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Title of the task
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Who the task should be assigned to
     * @default {"mode":"list","value":""}
     */
    assignedTo?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
    /** Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.
     */
    dueDateTime?: string | Expression<string> | PlaceholderValue;
    /** Percentage of task completion. When set to 100, the task is considered completed.
     * @default 0
     */
    percentComplete?: number | Expression<number>;
  };
};

export type MicrosoftTeamsV2TaskCreateOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  activeChecklistItemCount?: number;
  assigneePriority?: string;
  bucketId?: string;
  checklistItemCount?: number;
  completedBy?: null;
  completedDateTime?: null;
  conversationThreadId?: null;
  createdBy?: {
    application?: {
      displayName?: null;
      id?: string;
    };
    user?: {
      displayName?: null;
      id?: string;
    };
  };
  createdDateTime?: string;
  hasDescription?: boolean;
  id?: string;
  orderHint?: string;
  percentComplete?: number;
  planId?: string;
  previewType?: string;
  priority?: number;
  referenceCount?: number;
  startDateTime?: null;
  title?: string;
};

export type MicrosoftTeamsV2TaskCreateNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2TaskCreateParams>;
  output?: Items<MicrosoftTeamsV2TaskCreateOutput>;
};