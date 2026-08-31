/**
 * Freshservice Node - Version 1
 * Discriminator: resource=release, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1ReleaseDeleteParams = {
  resource: 'release';
  operation: 'delete';
/**
 * ID of the release to delete
 */
    releaseId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1ReleaseDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ReleaseDeleteParams>;
};