/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=comment, operation=update
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1CommentUpdateParams = {
  resource: 'comment';
  operation: 'update';
/**
 * Comment
 * @default {"mode":"list","value":""}
 */
    commentId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Message
 */
    message?: string | Expression<string> | PlaceholderValue;
};

export type TheHiveProjectV1CommentUpdateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1CommentUpdateParams>;
};