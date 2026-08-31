/**
 * Reddit Node - Version 1
 * Discriminator: resource=post, operation=delete
 */


interface Credentials {
  redditOAuth2Api: CredentialReference;
}

/** Remove a comment from a post */
export type RedditV1PostDeleteParams = {
  resource: 'post';
  operation: 'delete';
/**
 * ID of the post to delete. Found in the post URL: &lt;code&gt;/r/[subreddit_name]/comments/[post_id]/[post_title]&lt;/code&gt;
 */
    postId?: string | Expression<string> | PlaceholderValue;
};

export type RedditV1PostDeleteOutput = {
  success?: boolean;
};

export type RedditV1PostDeleteNode = {
  type: 'n8n-nodes-base.reddit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RedditV1PostDeleteParams>;
  output?: Items<RedditV1PostDeleteOutput>;
};