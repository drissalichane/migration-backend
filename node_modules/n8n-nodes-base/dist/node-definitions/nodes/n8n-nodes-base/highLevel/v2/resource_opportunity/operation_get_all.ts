/**
 * HighLevel Node - Version 2
 * Discriminator: resource=opportunity, operation=getAll
 */


interface Credentials {
  highLevelOAuth2Api: CredentialReference;
}

export type HighLevelV2OpportunityGetAllParams = {
  resource: 'opportunity';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 20
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    assignedTo?: string | Expression<string>;
    /** Campaign ID
     */
    campaignId?: string | Expression<string> | PlaceholderValue;
    /** End Date
     */
    endDate?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    pipelineId?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @hint Select 'Pipeline Name or ID' first to see stages
     */
    stageId?: string | Expression<string>;
    /** Start Date
     */
    startDate?: string | Expression<string>;
    /** Status
     * @default open
     */
    status?: 'open' | 'won' | 'lost' | 'abandoned' | Expression<string>;
    /** Query will search on these fields: Name, Phone, Email, Tags, and Company Name
     */
    query?: string | Expression<string> | PlaceholderValue;
  };
  requestOptions?: {
    /** Batching
     * @default {"batch":{}}
     */
    batching?: {
        /** Batching
     */
    batch?: {
      /** Input will be split in batches to throttle requests. -1 for disabled. 0 will be treated as 1.
       * @default 50
       */
      batchSize?: number | Expression<number>;
      /** Time (in milliseconds) between each batch of requests. 0 for disabled.
       * @default 1000
       */
      batchInterval?: number | Expression<number>;
    };
  };
    /** Whether to accept the response even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean;
    /** HTTP proxy to use. If authentication is required it can be defined as follow: http://username:password@myproxy:3128
     */
    proxy?: string | Expression<string> | PlaceholderValue;
    /** Time in ms to wait for the server to send response headers (and start the response body) before aborting the request
     * @default 10000
     */
    timeout?: number | Expression<number>;
  };
};

export type HighLevelV2OpportunityGetAllOutput = {
  attributions?: Array<{
    isFirst?: boolean;
    medium?: string;
    utmSessionSource?: string;
  }>;
  contact?: {
    id?: string;
    name?: string;
    tags?: Array<string>;
  };
  contactId?: string;
  createdAt?: string;
  customFields?: Array<{
    fieldValueString?: string;
    id?: string;
    type?: string;
  }>;
  followers?: Array<string>;
  id?: string;
  lastStageChangeAt?: string;
  lastStatusChangeAt?: string;
  locationId?: string;
  name?: string;
  pipelineId?: string;
  pipelineStageId?: string;
  pipelineStageUId?: string;
  relations?: Array<{
    associationId?: string;
    objectKey?: string;
    primary?: boolean;
    recordId?: string;
    relationId?: string;
    tags?: Array<string>;
  }>;
  status?: string;
  updatedAt?: string;
};

export type HighLevelV2OpportunityGetAllNode = {
  type: 'n8n-nodes-base.highLevel';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<HighLevelV2OpportunityGetAllParams>;
  output?: Items<HighLevelV2OpportunityGetAllOutput>;
};