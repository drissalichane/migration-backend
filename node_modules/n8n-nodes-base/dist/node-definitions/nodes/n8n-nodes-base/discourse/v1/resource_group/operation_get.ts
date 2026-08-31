/**
 * Discourse Node - Version 1
 * Discriminator: resource=group, operation=get
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Get a group */
export type DiscourseV1GroupGetParams = {
  resource: 'group';
  operation: 'get';
/**
 * Name of the group
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type DiscourseV1GroupGetNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1GroupGetParams>;
};