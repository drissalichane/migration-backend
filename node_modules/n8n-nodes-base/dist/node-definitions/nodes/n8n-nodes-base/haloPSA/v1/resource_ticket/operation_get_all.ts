/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=ticket, operation=getAll
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Get many clients */
export type HaloPSAV1TicketGetAllParams = {
  resource: 'ticket';
  operation: 'getAll';
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simplify?: boolean | Expression<boolean>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Active Status
     * @default all
     */
    activeStatus?: 'active' | 'all' | 'inactive' | Expression<string>;
    /** Filter tickets by your search string
     */
    search?: string | Expression<string> | PlaceholderValue;
  };
};

export type HaloPSAV1TicketGetAllOutput = {
  agent_id?: number;
  details?: string;
  id?: number;
  summary?: string;
  targetdate?: string;
};

export type HaloPSAV1TicketGetAllNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1TicketGetAllParams>;
  output?: Items<HaloPSAV1TicketGetAllOutput>;
};