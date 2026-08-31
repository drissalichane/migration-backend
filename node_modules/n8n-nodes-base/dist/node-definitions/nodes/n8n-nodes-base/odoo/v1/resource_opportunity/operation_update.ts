/**
 * Odoo Node - Version 1
 * Discriminator: resource=opportunity, operation=update
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Update an item */
export type OdooV1OpportunityUpdateParams = {
  resource: 'opportunity';
  operation: 'update';
/**
 * Opportunity ID
 */
    opportunityId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Email
     */
    email_from?: string | Expression<string> | PlaceholderValue;
    /** Expected Revenue
     * @default 0
     */
    expected_revenue?: number | Expression<number>;
    /** Internal Notes
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Priority
     * @default 1
     */
    priority?: '1' | '2' | '3' | Expression<string>;
    /** Probability
     * @default 0
     */
    probability?: number | Expression<number>;
  };
};

export type OdooV1OpportunityUpdateNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1OpportunityUpdateParams>;
};