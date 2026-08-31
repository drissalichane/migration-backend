/**
 * Reddit Node - Version 1
 * Discriminator: resource=subreddit, operation=get
 */


interface Credentials {
  redditOAuth2Api: CredentialReference;
}

export type RedditV1SubredditGetParams = {
  resource: 'subreddit';
  operation: 'get';
/**
 * Subreddit content to retrieve
 * @default about
 */
    content?: 'about' | 'rules' | Expression<string>;
/**
 * The name of subreddit to retrieve the content from
 */
    subreddit?: string | Expression<string> | PlaceholderValue;
};

export type RedditV1SubredditGetNode = {
  type: 'n8n-nodes-base.reddit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RedditV1SubredditGetParams>;
};