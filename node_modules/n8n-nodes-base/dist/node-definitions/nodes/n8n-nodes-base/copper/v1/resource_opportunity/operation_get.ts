/**
 * Copper Node - Version 1
 * Discriminator: resource=opportunity, operation=get
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1OpportunityGetParams = {
  resource: 'opportunity';
  operation: 'get';
/**
 * ID of the opportunity to retrieve
 */
    opportunityId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1OpportunityGetNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1OpportunityGetParams>;
};