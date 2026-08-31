/**
 * Freshservice Node - Version 1
 * Discriminator: resource=assetType, operation=create
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Create an agent */
export type FreshserviceV1AssetTypeCreateParams = {
  resource: 'assetType';
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
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    parent_asset_type_id?: string | Expression<string>;
  };
};

export type FreshserviceV1AssetTypeCreateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1AssetTypeCreateParams>;
};