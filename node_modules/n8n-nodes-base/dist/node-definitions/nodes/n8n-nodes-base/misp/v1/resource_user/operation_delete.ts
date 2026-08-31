/**
 * MISP Node - Version 1
 * Discriminator: resource=user, operation=delete
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1UserDeleteParams = {
  resource: 'user';
  operation: 'delete';
/**
 * Numeric ID of the user
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1UserDeleteNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1UserDeleteParams>;
};