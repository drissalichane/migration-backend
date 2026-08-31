/**
 * ActiveCampaign Node - Version 1
 * Discriminator: resource=deal, operation=get
 */


interface Credentials {
  activeCampaignApi: CredentialReference;
}

/** Get data of an account */
export type ActiveCampaignV1DealGetParams = {
  resource: 'deal';
  operation: 'get';
/**
 * The ID of the deal to get
 * @default 0
 */
    dealId?: number | Expression<number>;
};

export type ActiveCampaignV1DealGetOutput = {
  deal?: {
    activitycount?: string;
    cdate?: string;
    currency?: string;
    description?: string;
    group?: string;
    hash?: string;
    id?: string;
    isDisabled?: boolean;
    links?: {
      account?: string;
      contact?: string;
      contactDeals?: string;
      customerAccount?: string;
      dealActivities?: string;
      dealCustomFieldData?: string;
      group?: string;
      nextTask?: string;
      notes?: string;
      organization?: string;
      owner?: string;
      scoreValues?: string;
      stage?: string;
      tasks?: string;
    };
    mdate?: string;
    nextdealid?: string;
    owner?: string;
    percent?: string;
    stage?: string;
    status?: string;
    title?: string;
    value?: string;
  };
};

export type ActiveCampaignV1DealGetNode = {
  type: 'n8n-nodes-base.activeCampaign';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActiveCampaignV1DealGetParams>;
  output?: Items<ActiveCampaignV1DealGetOutput>;
};