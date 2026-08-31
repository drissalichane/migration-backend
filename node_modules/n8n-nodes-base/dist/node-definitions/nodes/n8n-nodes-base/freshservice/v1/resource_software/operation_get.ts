/**
 * Freshservice Node - Version 1
 * Discriminator: resource=software, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1SoftwareGetParams = {
  resource: 'software';
  operation: 'get';
/**
 * ID of the software application to retrieve
 */
    softwareId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1SoftwareGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1SoftwareGetParams>;
};