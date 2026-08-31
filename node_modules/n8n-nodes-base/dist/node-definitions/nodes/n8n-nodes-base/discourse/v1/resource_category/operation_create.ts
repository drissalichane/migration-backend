/**
 * Discourse Node - Version 1
 * Discriminator: resource=category, operation=create
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Create a category */
export type DiscourseV1CategoryCreateParams = {
  resource: 'category';
  operation: 'create';
/**
 * Name of the category
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Color of the category
 * @default 0000FF
 */
    color?: string | Expression<string>;
/**
 * Text color of the category
 * @default 0000FF
 */
    textColor?: string | Expression<string>;
};

export type DiscourseV1CategoryCreateNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1CategoryCreateParams>;
};