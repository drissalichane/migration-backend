/**
 * Todoist Node - Version 2.2
 * Discriminator: resource=comment, operation=get
 */


interface Credentials {
  todoistApi: CredentialReference;
  todoistOAuth2Api: CredentialReference;
}

/** Comment resource */
export type TodoistV22CommentGetParams = {
  resource: 'comment';
  operation: 'get';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * Comment ID
 */
    commentId?: string | Expression<string> | PlaceholderValue;
};

export type TodoistV22CommentGetNode = {
  type: 'n8n-nodes-base.todoist';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<TodoistV22CommentGetParams>;
};