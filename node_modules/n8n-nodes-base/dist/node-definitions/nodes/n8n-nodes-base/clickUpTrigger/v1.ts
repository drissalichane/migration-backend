/**
 * ClickUp Trigger Node - Version 1
 * Handle ClickUp events via webhooks (Beta)
 */


export interface ClickUpTriggerV1Params {
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    team?: string | Expression<string>;
  events?: Array<'*' | 'folderCreated' | 'folderDeleted' | 'folderUpdated' | 'goalCreated' | 'goalDeleted' | 'goalUpdated' | 'keyResultCreated' | 'keyResultDelete' | 'keyResultUpdated' | 'listCreated' | 'listDeleted' | 'listUpdated' | 'spaceCreated' | 'spaceDeleted' | 'spaceUpdated' | 'taskAssigneeUpdated' | 'taskCommentPosted' | 'taskCommentUpdated' | 'taskCreated' | 'taskDeleted' | 'taskDueDateUpdated' | 'taskMoved' | 'taskStatusUpdated' | 'taskTagUpdated' | 'taskTimeEstimateUpdated' | 'taskTimeTrackedUpdated' | 'taskUpdated'>;
  filters?: {
    /** Folder ID
     */
    folderId?: string | Expression<string> | PlaceholderValue;
    /** List ID
     */
    listId?: string | Expression<string> | PlaceholderValue;
    /** Space ID
     */
    spaceId?: string | Expression<string> | PlaceholderValue;
    /** Task ID
     */
    taskId?: string | Expression<string> | PlaceholderValue;
  };
}

export interface ClickUpTriggerV1Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

interface ClickUpTriggerV1NodeBase {
  type: 'n8n-nodes-base.clickUpTrigger';
  version: 1;
  credentials?: ClickUpTriggerV1Credentials;
  isTrigger: true;
}

export type ClickUpTriggerV1ParamsNode = ClickUpTriggerV1NodeBase & {
  config: NodeConfig<ClickUpTriggerV1Params>;
};

export type ClickUpTriggerV1Node = ClickUpTriggerV1ParamsNode;