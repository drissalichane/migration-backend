/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requesterGroup, operation=create
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Create an agent */
export type FreshserviceV1RequesterGroupCreateParams = {
  resource: 'requesterGroup';
  operation: 'create';
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1RequesterGroupCreateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterGroupCreateParams>;
};