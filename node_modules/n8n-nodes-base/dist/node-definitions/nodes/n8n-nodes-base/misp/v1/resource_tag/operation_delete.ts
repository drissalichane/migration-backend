/**
 * MISP Node - Version 1
 * Discriminator: resource=tag, operation=delete
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1TagDeleteParams = {
  resource: 'tag';
  operation: 'delete';
/**
 * Numeric ID of the attribute
 */
    tagId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1TagDeleteNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1TagDeleteParams>;
};