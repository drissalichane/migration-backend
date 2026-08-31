/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=portfolioCompany, operation=remove
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Remove a company from portfolio */
export type SecurityScorecardV1PortfolioCompanyRemoveParams = {
  resource: 'portfolioCompany';
  operation: 'remove';
/**
 * Portfolio ID
 */
    portfolioId?: string | Expression<string> | PlaceholderValue;
/**
 * Company's domain name
 */
    domain?: string | Expression<string> | PlaceholderValue;
};

export type SecurityScorecardV1PortfolioCompanyRemoveNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1PortfolioCompanyRemoveParams>;
};