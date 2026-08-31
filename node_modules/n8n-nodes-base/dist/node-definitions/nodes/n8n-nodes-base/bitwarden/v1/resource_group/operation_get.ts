/**
 * Bitwarden Node - Version 1
 * Discriminator: resource=group, operation=get
 */


interface Credentials {
  bitwardenApi: CredentialReference;
}

export type BitwardenV1GroupGetParams = {
  resource: 'group';
  operation: 'get';
/**
 * The identifier of the group
 */
    groupId?: string | Expression<string> | PlaceholderValue;
};

export type BitwardenV1GroupGetNode = {
  type: 'n8n-nodes-base.bitwarden';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitwardenV1GroupGetParams>;
};