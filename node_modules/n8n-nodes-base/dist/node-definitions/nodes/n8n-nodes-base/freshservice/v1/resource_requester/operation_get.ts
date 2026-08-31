/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requester, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1RequesterGetParams = {
  resource: 'requester';
  operation: 'get';
/**
 * ID of the requester to retrieve
 */
    requesterId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1RequesterGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterGetParams>;
};