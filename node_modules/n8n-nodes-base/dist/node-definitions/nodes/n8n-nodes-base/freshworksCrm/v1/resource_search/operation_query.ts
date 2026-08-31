/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=search, operation=query
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Search for records by entering search queries of your choice */
export type FreshworksCrmV1SearchQueryParams = {
  resource: 'search';
  operation: 'query';
/**
 * Enter a term that will be used for searching entities
 */
    query?: string | Expression<string> | PlaceholderValue;
/**
 * Enter a term that will be used for searching entities
 * @default []
 */
    entities?: Array<'contact' | 'deal' | 'sales_account' | 'user'>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 25
 */
    limit?: number | Expression<number>;
};

export type FreshworksCrmV1SearchQueryOutput = {
  email?: string;
  id?: string;
  mcr_id?: number;
  name?: string;
  owner?: {
    id?: number;
    name?: string;
  };
  stage_name?: string;
  type?: string;
  updated_at?: string;
};

export type FreshworksCrmV1SearchQueryNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1SearchQueryParams>;
  output?: Items<FreshworksCrmV1SearchQueryOutput>;
};