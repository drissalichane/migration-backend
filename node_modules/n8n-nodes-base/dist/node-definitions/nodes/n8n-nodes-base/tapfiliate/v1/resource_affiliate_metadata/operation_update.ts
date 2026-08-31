/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=affiliateMetadata, operation=update
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Update affiliate's metadata */
export type TapfiliateV1AffiliateMetadataUpdateParams = {
  resource: 'affiliateMetadata';
  operation: 'update';
/**
 * The ID of the affiliate
 */
    affiliateId?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the metadata key to update
 */
    key?: string | Expression<string> | PlaceholderValue;
/**
 * Value to set for the metadata key
 */
    value?: string | Expression<string> | PlaceholderValue;
};

export type TapfiliateV1AffiliateMetadataUpdateNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1AffiliateMetadataUpdateParams>;
};