/**
 * Discourse Node - Version 1
 * Discriminator: resource=post, operation=create
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Create a category */
export type DiscourseV1PostCreateParams = {
  resource: 'post';
  operation: 'create';
/**
 * Title of the post
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Content of the post
 */
    content?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the category. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    category?: string | Expression<string>;
    /** The number of the post to reply to
     */
    reply_to_post_number?: string | Expression<string> | PlaceholderValue;
    /** ID of the topic
     */
    topic_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type DiscourseV1PostCreateNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1PostCreateParams>;
};