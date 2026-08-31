/**
 * Copper Node - Version 1
 * Discriminator: resource=lead, operation=getAll
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1LeadGetAllParams = {
  resource: 'lead';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 5
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filterFields?: {
    /** Name of the country to filter by
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** Name of the lead to filter by
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type CopperV1LeadGetAllNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1LeadGetAllParams>;
};