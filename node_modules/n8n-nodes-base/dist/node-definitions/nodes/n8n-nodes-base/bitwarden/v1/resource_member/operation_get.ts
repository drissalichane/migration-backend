/**
 * Bitwarden Node - Version 1
 * Discriminator: resource=member, operation=get
 */


interface Credentials {
  bitwardenApi: CredentialReference;
}

export type BitwardenV1MemberGetParams = {
  resource: 'member';
  operation: 'get';
/**
 * The identifier of the member
 */
    memberId?: string | Expression<string> | PlaceholderValue;
};

export type BitwardenV1MemberGetNode = {
  type: 'n8n-nodes-base.bitwarden';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitwardenV1MemberGetParams>;
};