/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=programAffiliate, operation=getAll
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Get many affiliates */
export type TapfiliateV1ProgramAffiliateGetAllParams = {
  resource: 'programAffiliate';
  operation: 'getAll';
/**
 * The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    programId?: string | Expression<string>;
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
    /** An email address
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Retrieves children for a certain parent affiliate
     */
    parentId?: string | Expression<string> | PlaceholderValue;
    /** Source ID
     */
    source_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type TapfiliateV1ProgramAffiliateGetAllNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1ProgramAffiliateGetAllParams>;
};