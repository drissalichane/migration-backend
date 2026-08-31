/**
 * Reddit Node - Version 1
 * Discriminator: resource=post, operation=create
 */


interface Credentials {
  redditOAuth2Api: CredentialReference;
}

/** Create a top-level comment in a post */
export type RedditV1PostCreateParams = {
  resource: 'post';
  operation: 'create';
/**
 * Subreddit to create the post in
 */
    subreddit?: string | Expression<string> | PlaceholderValue;
/**
 * The kind of the post to create
 * @default self
 */
    kind?: 'self' | 'link' | 'image' | Expression<string>;
/**
 * Title of the post, up to 300 characters long
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * URL of the post
 * @displayOptions.show { kind: ["link", "image"] }
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Text of the post. Markdown supported.
 * @displayOptions.show { kind: ["self"] }
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the URL will be posted even if it was already posted to the subreddit before. Otherwise, the re-posting will trigger an error.
 * @displayOptions.show { kind: ["link", "image"] }
 * @default false
 */
    resubmit?: boolean | Expression<boolean>;
};

export type RedditV1PostCreateOutput = {
  drafts_count?: number;
  id?: string;
  name?: string;
  url?: string;
};

export type RedditV1PostCreateNode = {
  type: 'n8n-nodes-base.reddit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RedditV1PostCreateParams>;
  output?: Items<RedditV1PostCreateOutput>;
};