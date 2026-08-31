/**
 * Freshservice Node - Version 1
 * Discriminator: resource=change, operation=get
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve an agent */
export type FreshserviceV1ChangeGetParams = {
  resource: 'change';
  operation: 'get';
/**
 * ID of the change to retrieve
 */
    changeId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1ChangeGetNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ChangeGetParams>;
};