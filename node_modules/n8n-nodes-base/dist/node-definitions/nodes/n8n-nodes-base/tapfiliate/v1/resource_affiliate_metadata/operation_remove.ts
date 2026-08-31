/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=affiliateMetadata, operation=remove
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Remove metadata from affiliate */
export type TapfiliateV1AffiliateMetadataRemoveParams = {
  resource: 'affiliateMetadata';
  operation: 'remove';
/**
 * The ID of the affiliate
 */
    affiliateId?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the metadata key to remove
 */
    key?: string | Expression<string> | PlaceholderValue;
};

export type TapfiliateV1AffiliateMetadataRemoveNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1AffiliateMetadataRemoveParams>;
};