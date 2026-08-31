/**
 * Bitwarden Node - Version 1
 * Discriminator: resource=group, operation=getMembers
 */


interface Credentials {
  bitwardenApi: CredentialReference;
}

export type BitwardenV1GroupGetMembersParams = {
  resource: 'group';
  operation: 'getMembers';
/**
 * The identifier of the group
 */
    groupId?: string | Expression<string> | PlaceholderValue;
};

export type BitwardenV1GroupGetMembersNode = {
  type: 'n8n-nodes-base.bitwarden';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitwardenV1GroupGetMembersParams>;
};