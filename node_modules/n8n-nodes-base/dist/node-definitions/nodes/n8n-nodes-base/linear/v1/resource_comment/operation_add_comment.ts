/**
 * Linear Node - Version 1
 * Discriminator: resource=comment, operation=addComment
 */


interface Credentials {
  linearApi: CredentialReference;
  linearOAuth2Api: CredentialReference;
}

/** Add a comment to an issue */
export type LinearV1CommentAddCommentParams = {
  resource: 'comment';
  operation: 'addComment';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Issue ID
 */
    issueId?: string | Expression<string> | PlaceholderValue;
/**
 * Comment
 */
    comment?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the parent comment if this is a reply
     */
    parentId?: string | Expression<string> | PlaceholderValue;
  };
};

export type LinearV1CommentAddCommentNode = {
  type: 'n8n-nodes-base.linear';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<LinearV1CommentAddCommentParams>;
};