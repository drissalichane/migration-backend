/**
 * Copper Node - Version 1
 * Discriminator: resource=opportunity, operation=update
 */


interface Credentials {
  copperApi: CredentialReference;
}

export type CopperV1OpportunityUpdateParams = {
  resource: 'opportunity';
  operation: 'update';
/**
 * ID of the opportunity to update
 */
    opportunityId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** ID of the primary company associated with this opportunity
     */
    customer_source_id?: string | Expression<string> | PlaceholderValue;
    /** Name to set for the opportunity
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** ID of the customer source that generated this opportunity
     */
    primary_contact_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type CopperV1OpportunityUpdateNode = {
  type: 'n8n-nodes-base.copper';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CopperV1OpportunityUpdateParams>;
};