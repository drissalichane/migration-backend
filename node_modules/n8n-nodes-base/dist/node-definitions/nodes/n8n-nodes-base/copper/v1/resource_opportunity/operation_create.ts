/**
 * Copper Node - Version 1
 * Discriminator: resource=opportunity, operation=create
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1OpportunityCreateParams = {
  resource: 'opportunity';
  operation: 'create';
/**
 * Name of the opportunity to create
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the customer source that generated this opportunity
 */
    customerSourceId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the primary company associated with this opportunity
 */
    primaryContactId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1OpportunityCreateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1OpportunityCreateParams>;
};