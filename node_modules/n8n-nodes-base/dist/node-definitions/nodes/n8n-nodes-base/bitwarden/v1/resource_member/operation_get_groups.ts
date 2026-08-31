/**
 * Bitwarden Node - Version 1
 * Discriminator: resource=member, operation=getGroups
 */


interface Credentials {
  bitwardenApi: CredentialReference;
}

export type BitwardenV1MemberGetGroupsParams = {
  resource: 'member';
  operation: 'getGroups';
/**
 * The identifier of the member
 */
    memberId?: string | Expression<string> | PlaceholderValue;
};

export type BitwardenV1MemberGetGroupsNode = {
  type: 'n8n-nodes-base.bitwarden';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitwardenV1MemberGetGroupsParams>;
};