/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requesterGroup, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1RequesterGroupUpdateParams = {
  resource: 'requesterGroup';
  operation: 'update';
/**
 * ID of the requester group to update
 */
    requesterGroupId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Description of the requester group
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Name of the requester group
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1RequesterGroupUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterGroupUpdateParams>;
};