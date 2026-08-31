/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=affiliate, operation=delete
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Delete an affiliate */
export type TapfiliateV1AffiliateDeleteParams = {
  resource: 'affiliate';
  operation: 'delete';
/**
 * The ID of the affiliate
 */
    affiliateId?: string | Expression<string> | PlaceholderValue;
};

export type TapfiliateV1AffiliateDeleteNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1AffiliateDeleteParams>;
};