/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=comment, operation=deleteComment
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1CommentDeleteCommentParams = {
  resource: 'comment';
  operation: 'deleteComment';
/**
 * Comment
 * @default {"mode":"list","value":""}
 */
    commentId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type TheHiveProjectV1CommentDeleteCommentNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1CommentDeleteCommentParams>;
};