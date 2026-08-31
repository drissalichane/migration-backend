/**
 * Todoist Node - Version 2
 * Discriminator: resource=comment, operation=getAll
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Comment resource */
export type TodoistV2CommentGetAllParams = {
  resource: 'comment';
  operation: 'getAll';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Filters
 * @default {}
 */
    commentFilters?: {
    /** Filter comments by task ID
     */
    task_id?: string | Expression<string> | PlaceholderValue;
    /** Filter comments by project ID
     */
    project_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type TodoistV2CommentGetAllNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV2CommentGetAllParams>;
};