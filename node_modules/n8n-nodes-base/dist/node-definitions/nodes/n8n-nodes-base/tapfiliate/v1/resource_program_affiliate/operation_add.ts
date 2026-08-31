/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=programAffiliate, operation=add
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Add metadata to affiliate */
export type TapfiliateV1ProgramAffiliateAddParams = {
  resource: 'programAffiliate';
  operation: 'add';
/**
 * The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    programId?: string | Expression<string>;
/**
 * The ID of the affiliate
 */
    affiliateId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** An optional approval status
     * @default true
     */
    approved?: boolean | Expression<boolean>;
    /** An optional coupon for this affiliate
     */
    coupon?: string | Expression<string> | PlaceholderValue;
  };
};

export type TapfiliateV1ProgramAffiliateAddNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1ProgramAffiliateAddParams>;
};