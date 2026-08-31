/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=portfolio, operation=delete
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Delete a portfolio */
export type SecurityScorecardV1PortfolioDeleteParams = {
  resource: 'portfolio';
  operation: 'delete';
/**
 * Portfolio ID
 */
    portfolioId?: string | Expression<string> | PlaceholderValue;
};

export type SecurityScorecardV1PortfolioDeleteNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1PortfolioDeleteParams>;
};