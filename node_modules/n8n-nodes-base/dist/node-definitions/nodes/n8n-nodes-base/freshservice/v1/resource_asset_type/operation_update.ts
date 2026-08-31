/**
 * Freshservice Node - Version 1
 * Discriminator: resource=assetType, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1AssetTypeUpdateParams = {
  resource: 'assetType';
  operation: 'update';
/**
 * ID of the asset type to update
 */
    assetTypeId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1AssetTypeUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1AssetTypeUpdateParams>;
};