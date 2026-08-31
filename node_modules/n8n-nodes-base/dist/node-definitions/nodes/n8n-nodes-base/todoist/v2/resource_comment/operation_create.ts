/**
 * Todoist Node - Version 2
 * Discriminator: resource=comment, operation=create
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Comment resource */
export type TodoistV2CommentCreateParams = {
  resource: 'comment';
  operation: 'create';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * The ID of the task to comment on
 */
    commentTaskId?: string | Expression<string> | PlaceholderValue;
/**
 * Comment content
 */
    commentContent?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV2CommentCreateNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV2CommentCreateParams>;
};