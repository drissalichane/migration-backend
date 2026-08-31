/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=portfolioCompany, operation=add
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Add a company to portfolio */
export type SecurityScorecardV1PortfolioCompanyAddParams = {
  resource: 'portfolioCompany';
  operation: 'add';
/**
 * Portfolio ID
 */
    portfolioId?: string | Expression<string> | PlaceholderValue;
/**
 * Company's domain name
 */
    domain?: string | Expression<string> | PlaceholderValue;
};

export type SecurityScorecardV1PortfolioCompanyAddNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1PortfolioCompanyAddParams>;
};