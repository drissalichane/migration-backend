/**
 * Discourse Node - Version 1
 * Discriminator: resource=group, operation=update
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Update a category */
export type DiscourseV1GroupUpdateParams = {
  resource: 'group';
  operation: 'update';
/**
 * ID of the group to update
 */
    groupId?: string | Expression<string> | PlaceholderValue;
/**
 * New name of the group
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type DiscourseV1GroupUpdateNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1GroupUpdateParams>;
};