/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=affiliate, operation=get
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Get an affiliate by ID */
export type TapfiliateV1AffiliateGetParams = {
  resource: 'affiliate';
  operation: 'get';
/**
 * The ID of the affiliate
 */
    affiliateId?: string | Expression<string> | PlaceholderValue;
};

export type TapfiliateV1AffiliateGetNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1AffiliateGetParams>;
};