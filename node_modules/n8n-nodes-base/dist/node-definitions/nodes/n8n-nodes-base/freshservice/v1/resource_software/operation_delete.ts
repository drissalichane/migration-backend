/**
 * Freshservice Node - Version 1
 * Discriminator: resource=software, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1SoftwareDeleteParams = {
  resource: 'software';
  operation: 'delete';
/**
 * ID of the software application to delete
 */
    softwareId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1SoftwareDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1SoftwareDeleteParams>;
};