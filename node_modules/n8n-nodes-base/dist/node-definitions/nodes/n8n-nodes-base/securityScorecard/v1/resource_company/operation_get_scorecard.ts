/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=company, operation=getScorecard
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Get company information and summary of their scorecard */
export type SecurityScorecardV1CompanyGetScorecardParams = {
  resource: 'company';
  operation: 'getScorecard';
/**
 * Primary identifier of a company or scorecard, i.e. domain.
 */
    scorecardIdentifier?: string | Expression<string> | PlaceholderValue;
};

export type SecurityScorecardV1CompanyGetScorecardNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1CompanyGetScorecardParams>;
};