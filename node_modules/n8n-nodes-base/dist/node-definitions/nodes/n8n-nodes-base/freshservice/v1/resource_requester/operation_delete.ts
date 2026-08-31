/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requester, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1RequesterDeleteParams = {
  resource: 'requester';
  operation: 'delete';
/**
 * ID of the requester to delete
 */
    requesterId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1RequesterDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterDeleteParams>;
};