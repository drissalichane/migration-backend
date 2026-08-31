/**
 * Odoo Node - Version 1
 * Discriminator: resource=opportunity, operation=create
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Create a new item */
export type OdooV1OpportunityCreateParams = {
  resource: 'opportunity';
  operation: 'create';
/**
 * Name
 */
    opportunityName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
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

export type OdooV1OpportunityCreateOutput = {
  id?: number;
};

export type OdooV1OpportunityCreateNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1OpportunityCreateParams>;
  output?: Items<OdooV1OpportunityCreateOutput>;
};