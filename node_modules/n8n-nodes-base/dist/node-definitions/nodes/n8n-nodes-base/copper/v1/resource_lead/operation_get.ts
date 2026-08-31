/**
 * Copper Node - Version 1
 * Discriminator: resource=lead, operation=get
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1LeadGetParams = {
  resource: 'lead';
  operation: 'get';
/**
 * ID of the lead to retrieve
 */
    leadId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1LeadGetNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1LeadGetParams>;
};