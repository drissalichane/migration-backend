/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=customer, operation=getAll
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Retrieve many customers */
export type SyncroMspV1CustomerGetAllParams = {
  resource: 'customer';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 25
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Business Name
     */
    businessName?: string | Expression<string> | PlaceholderValue;
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Include Disabled
     * @default false
     */
    includeDisabled?: boolean | Expression<boolean>;
    /** Last Name
     */
    lastname?: string | Expression<string> | PlaceholderValue;
    /** Search query, it can be anything related to customer data like name etc
     */
    query?: string | Expression<string> | PlaceholderValue;
    /** Customer field to order by, eg: "firstname ASC", "city DESC" etc
     */
    sort?: string | Expression<string> | PlaceholderValue;
  };
};

export type SyncroMspV1CustomerGetAllNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1CustomerGetAllParams>;
};