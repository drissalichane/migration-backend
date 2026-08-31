/**
 * Lemlist Node - Version 2
 * Discriminator: resource=campaign, operation=getAll
 */


interface Credentials {
  lemlistApi: CredentialReference;
}

export type LemlistV2CampaignGetAllParams = {
  resource: 'campaign';
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
    filters?: {
    /** Version
     * @default v2
     */
    version?: string | Expression<string> | PlaceholderValue;
  };
};

export type LemlistV2CampaignGetAllOutput = {
  _id?: string;
  createdAt?: string;
  createdBy?: string;
  name?: string;
  status?: string;
};

export type LemlistV2CampaignGetAllNode = {
  type: 'n8n-nodes-base.lemlist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<LemlistV2CampaignGetAllParams>;
  output?: Items<LemlistV2CampaignGetAllOutput>;
};