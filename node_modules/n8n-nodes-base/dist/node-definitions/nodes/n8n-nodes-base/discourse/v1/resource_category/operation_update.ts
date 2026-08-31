/**
 * Discourse Node - Version 1
 * Discriminator: resource=category, operation=update
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Update a category */
export type DiscourseV1CategoryUpdateParams = {
  resource: 'category';
  operation: 'update';
/**
 * ID of the category
 */
    categoryId?: string | Expression<string> | PlaceholderValue;
/**
 * New name of the category
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Color of the category
     * @default 0000FF
     */
    color?: string | Expression<string>;
    /** Text color of the category
     * @default 0000FF
     */
    textColor?: string | Expression<string>;
  };
};

export type DiscourseV1CategoryUpdateNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1CategoryUpdateParams>;
};