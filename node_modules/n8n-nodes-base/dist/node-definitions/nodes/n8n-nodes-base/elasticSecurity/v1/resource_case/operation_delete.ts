/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=case, operation=delete
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Delete a case */
export type ElasticSecurityV1CaseDeleteParams = {
  resource: 'case';
  operation: 'delete';
/**
 * Case ID
 */
    caseId?: string | Expression<string> | PlaceholderValue;
};

export type ElasticSecurityV1CaseDeleteNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseDeleteParams>;
};