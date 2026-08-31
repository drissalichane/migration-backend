/**
 * Freshservice Node - Version 1
 * Discriminator: resource=location, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1LocationGetParams = {
  resource: 'location';
  operation: 'get';
/**
 * ID of the location to retrieve
 */
    locationId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1LocationGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1LocationGetParams>;
};