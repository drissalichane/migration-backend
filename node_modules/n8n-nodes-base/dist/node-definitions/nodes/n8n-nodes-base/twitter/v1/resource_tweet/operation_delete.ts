/**
 * X (Formerly Twitter) Node - Version 1
 * Discriminator: resource=tweet, operation=delete
 */


interface Credentials {
  twitterOAuth1Api: CredentialReference;
}

/** Delete a tweet */
export type TwitterV1TweetDeleteParams = {
  resource: 'tweet';
  operation: 'delete';
/**
 * The ID of the tweet to delete
 */
    tweetId?: string | Expression<string> | PlaceholderValue;
};

export type TwitterV1TweetDeleteNode = {
  type: 'n8n-nodes-base.twitter';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwitterV1TweetDeleteParams>;
};