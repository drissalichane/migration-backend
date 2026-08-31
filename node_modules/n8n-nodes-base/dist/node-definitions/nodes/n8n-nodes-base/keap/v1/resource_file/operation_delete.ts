/**
 * Keap Node - Version 1
 * Discriminator: resource=file, operation=delete
 */


interface Credentials {
  keapOAuth2Api: CredentialReference;
}

/** Delete an contact */
export type KeapV1FileDeleteParams = {
  resource: 'file';
  operation: 'delete';
/**
 * File ID
 */
    fileId?: string | Expression<string> | PlaceholderValue;
};

export type KeapV1FileDeleteNode = {
  type: 'n8n-nodes-base.keap';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KeapV1FileDeleteParams>;
};