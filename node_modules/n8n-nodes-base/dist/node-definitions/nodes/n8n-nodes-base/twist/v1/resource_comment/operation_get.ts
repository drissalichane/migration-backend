/**
 * Twist Node - Version 1
 * Discriminator: resource=comment, operation=get
 */


interface Credentials {
  twistOAuth2Api: CredentialReference;
}

/** Get information about a channel */
export type TwistV1CommentGetParams = {
  resource: 'comment';
  operation: 'get';
/**
 * The ID of the comment
 */
    commentId?: string | Expression<string> | PlaceholderValue;
};

export type TwistV1CommentGetNode = {
  type: 'n8n-nodes-base.twist';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwistV1CommentGetParams>;
};