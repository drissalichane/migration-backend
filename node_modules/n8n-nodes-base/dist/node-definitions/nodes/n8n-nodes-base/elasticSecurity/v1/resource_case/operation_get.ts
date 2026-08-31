/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=case, operation=get
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Get a case */
export type ElasticSecurityV1CaseGetParams = {
  resource: 'case';
  operation: 'get';
/**
 * Case ID
 */
    caseId?: string | Expression<string> | PlaceholderValue;
};

export type ElasticSecurityV1CaseGetNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseGetParams>;
};