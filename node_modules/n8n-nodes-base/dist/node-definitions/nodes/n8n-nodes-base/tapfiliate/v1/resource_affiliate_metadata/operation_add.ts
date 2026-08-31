/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=affiliateMetadata, operation=add
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Add metadata to affiliate */
export type TapfiliateV1AffiliateMetadataAddParams = {
  resource: 'affiliateMetadata';
  operation: 'add';
/**
 * The ID of the affiliate
 */
    affiliateId?: string | Expression<string> | PlaceholderValue;
/**
 * Meta data
 * @default {}
 */
    metadataUi?: {
        /** Metadata
     */
    metadataValues?: Array<{
      /** Name of the metadata key to add
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to set for the metadata key
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type TapfiliateV1AffiliateMetadataAddNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1AffiliateMetadataAddParams>;
};