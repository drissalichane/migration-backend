/**
 * Discourse Node - Version 1
 * Discriminator: resource=group, operation=create
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Create a category */
export type DiscourseV1GroupCreateParams = {
  resource: 'group';
  operation: 'create';
/**
 * Name of the group
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type DiscourseV1GroupCreateNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1GroupCreateParams>;
};