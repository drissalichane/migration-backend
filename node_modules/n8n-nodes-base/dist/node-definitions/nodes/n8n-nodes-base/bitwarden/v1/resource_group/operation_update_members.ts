/**
 * Bitwarden Node - Version 1
 * Discriminator: resource=group, operation=updateMembers
 */


interface Credentials {
  bitwardenApi: CredentialReference;
}

export type BitwardenV1GroupUpdateMembersParams = {
  resource: 'group';
  operation: 'updateMembers';
/**
 * The identifier of the group
 */
    groupId?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of IDs of members to set in a group
 */
    memberIds?: string | Expression<string> | PlaceholderValue;
};

export type BitwardenV1GroupUpdateMembersNode = {
  type: 'n8n-nodes-base.bitwarden';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitwardenV1GroupUpdateMembersParams>;
};