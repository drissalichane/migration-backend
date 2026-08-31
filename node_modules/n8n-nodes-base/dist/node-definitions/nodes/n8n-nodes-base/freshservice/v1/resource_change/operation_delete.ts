/**
 * Freshservice Node - Version 1
 * Discriminator: resource=change, operation=delete
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Delete an agent */
export type FreshserviceV1ChangeDeleteParams = {
  resource: 'change';
  operation: 'delete';
/**
 * ID of the change to delete
 */
    changeId?: string | Expression<string> | PlaceholderValue;
};

export type FreshserviceV1ChangeDeleteNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1ChangeDeleteParams>;
};