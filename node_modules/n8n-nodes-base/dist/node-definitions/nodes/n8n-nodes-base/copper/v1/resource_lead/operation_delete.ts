/**
 * Copper Node - Version 1
 * Discriminator: resource=lead, operation=delete
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1LeadDeleteParams = {
  resource: 'lead';
  operation: 'delete';
/**
 * ID of the lead to delete
 */
    leadId?: string | Expression<string> | PlaceholderValue;
};

export type CopperV1LeadDeleteNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1LeadDeleteParams>;
};