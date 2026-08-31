/**
 * Discourse Node - Version 1
 * Discriminator: resource=post, operation=update
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Update a category */
export type DiscourseV1PostUpdateParams = {
  resource: 'post';
  operation: 'update';
/**
 * ID of the post
 */
    postId?: string | Expression<string> | PlaceholderValue;
/**
 * Content of the post. HTML is supported.
 */
    content?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Edit Reason
     */
    edit_reason?: string | Expression<string> | PlaceholderValue;
    /** Cooked
     * @default false
     */
    cooked?: boolean | Expression<boolean>;
  };
};

export type DiscourseV1PostUpdateNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1PostUpdateParams>;
};