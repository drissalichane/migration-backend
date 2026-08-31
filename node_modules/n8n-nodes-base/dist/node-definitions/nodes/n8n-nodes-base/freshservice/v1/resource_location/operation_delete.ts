/**
 * Freshservice Node - Version 1
 * Discriminator: resource=location, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1LocationDeleteParams = {
  resource: 'location';
  operation: 'delete';
/**
 * ID of the location to delete
 */
    locationId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1LocationDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1LocationDeleteParams>;
};