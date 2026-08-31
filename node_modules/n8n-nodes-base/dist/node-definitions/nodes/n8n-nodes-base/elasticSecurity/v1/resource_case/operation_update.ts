/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=case, operation=update
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Update a case */
export type ElasticSecurityV1CaseUpdateParams = {
  resource: 'case';
  operation: 'update';
/**
 * Case ID
 */
    caseId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Status
     * @default open
     */
    status?: 'closed' | 'open' | 'in-progress' | Expression<string>;
    /** Whether to synchronize with alerts
     * @default false
     */
    syncAlerts?: boolean | Expression<boolean>;
    /** Title
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Version
     */
    version?: string | Expression<string> | PlaceholderValue;
  };
};

export type ElasticSecurityV1CaseUpdateNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseUpdateParams>;
};