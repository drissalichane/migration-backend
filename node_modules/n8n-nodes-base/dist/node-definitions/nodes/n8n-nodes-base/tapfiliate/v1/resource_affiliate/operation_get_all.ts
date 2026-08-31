/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=affiliate, operation=getAll
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Get many affiliates */
export type TapfiliateV1AffiliateGetAllParams = {
  resource: 'affiliate';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Retrieves affiliates for a certain affiliate group
     */
    affiliate_group_id?: string | Expression<string> | PlaceholderValue;
    /** Click ID
     */
    click_id?: string | Expression<string> | PlaceholderValue;
    /** An email address,
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Retrieves children for a certain parent affiliate
     */
    parentId?: string | Expression<string> | PlaceholderValue;
    /** An affiliate’s referral code. This corresponds to the value of ref= in their referral link.
     */
    referral_code?: string | Expression<string> | PlaceholderValue;
    /** Source ID
     */
    source_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type TapfiliateV1AffiliateGetAllNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1AffiliateGetAllParams>;
};