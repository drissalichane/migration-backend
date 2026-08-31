/**
 * Freshservice Node - Version 1
 * Discriminator: resource=release, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1ReleaseGetParams = {
  resource: 'release';
  operation: 'get';
/**
 * ID of the release to retrieve
 */
    releaseId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1ReleaseGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ReleaseGetParams>;
};