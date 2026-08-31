/**
 * Microsoft Teams Node - Version 2
 * Discriminator: resource=task, operation=getAll
 */


interface Credentials {
  microsoftTeamsOAuth2Api: CredentialReference;
}

/** Get many channels */
export type MicrosoftTeamsV2TaskGetAllParams = {
  resource: 'task';
  operation: 'getAll';
/**
 * Whether to retrieve the tasks for a user or for a plan
 * @default member
 */
    tasksFor?: 'member' | 'plan' | Expression<string>;
/**
 * Team
 * @default {"mode":"list","value":""}
 */
    groupId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * The plan for the task to belong to
 * @displayOptions.show { tasksFor: ["plan"] }
 * @default {"mode":"list","value":""}
 */
    planId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
};

export type MicrosoftTeamsV2TaskGetAllOutput = {
  '@odata.etag'?: string;
  activeChecklistItemCount?: number;
  assigneePriority?: string;
  checklistItemCount?: number;
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
  title?: string;
};

export type MicrosoftTeamsV2TaskGetAllNode = {
  type: 'n8n-nodes-base.microsoftTeams';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftTeamsV2TaskGetAllParams>;
  output?: Items<MicrosoftTeamsV2TaskGetAllOutput>;
};