/**
 * Copper Node - Version 1
 * Discriminator: resource=opportunity, operation=delete
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1OpportunityDeleteParams = {
  resource: 'opportunity';
  operation: 'delete';
/**
 * ID of the opportunity to delete
 */
    opportunityId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1OpportunityDeleteNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1OpportunityDeleteParams>;
};