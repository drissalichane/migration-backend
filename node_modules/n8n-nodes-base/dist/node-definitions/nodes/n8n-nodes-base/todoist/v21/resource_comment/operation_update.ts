/**
 * Todoist Node - Version 2.1
 * Discriminator: resource=comment, operation=update
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Comment resource */
export type TodoistV21CommentUpdateParams = {
  resource: 'comment';
  operation: 'update';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Comment ID
 */
    commentId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    commentUpdateFields?: {
    /** Comment content
     */
    content?: string | Expression<string> | PlaceholderValue;
  };
};

export type TodoistV21CommentUpdateNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<TodoistV21CommentUpdateParams>;
};