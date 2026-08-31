/**
 * Bitwarden Node - Version 1
 * Discriminator: resource=member, operation=delete
 */


interface Credentials {
  bitwardenApi: CredentialReference;
}

export type BitwardenV1MemberDeleteParams = {
  resource: 'member';
  operation: 'delete';
/**
 * The identifier of the member
 */
    memberId?: string | Expression<string> | PlaceholderValue;
};

export type BitwardenV1MemberDeleteNode = {
  type: 'n8n-nodes-base.bitwarden';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitwardenV1MemberDeleteParams>;
};