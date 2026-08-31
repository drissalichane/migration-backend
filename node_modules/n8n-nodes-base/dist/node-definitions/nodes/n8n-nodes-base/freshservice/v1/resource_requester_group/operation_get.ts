/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requesterGroup, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1RequesterGroupGetParams = {
  resource: 'requesterGroup';
  operation: 'get';
/**
 * ID of the requester group to retrieve
 */
    requesterGroupId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1RequesterGroupGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterGroupGetParams>;
};