/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requesterGroup, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1RequesterGroupDeleteParams = {
  resource: 'requesterGroup';
  operation: 'delete';
/**
 * ID of the requester group to delete
 */
    requesterGroupId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1RequesterGroupDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterGroupDeleteParams>;
};