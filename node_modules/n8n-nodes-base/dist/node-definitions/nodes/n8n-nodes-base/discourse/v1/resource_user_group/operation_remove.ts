/**
 * Discourse Node - Version 1
 * Discriminator: resource=userGroup, operation=remove
 */


interface Credentials {
  discourseApi: CredentialReference;
}

/** Remove user from group */
export type DiscourseV1UserGroupRemoveParams = {
  resource: 'userGroup';
  operation: 'remove';
/**
 * Usernames to remove from group. Multiples can be defined separated by comma.
 */
    usernames?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the group to remove
 */
    groupId?: string | Expression<string> | PlaceholderValue;
};

export type DiscourseV1UserGroupRemoveNode = {
  type: 'n8n-nodes-base.discourse';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DiscourseV1UserGroupRemoveParams>;
};