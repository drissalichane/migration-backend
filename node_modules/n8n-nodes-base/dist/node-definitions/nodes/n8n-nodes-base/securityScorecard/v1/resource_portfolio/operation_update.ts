/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=portfolio, operation=update
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Update a portfolio */
export type SecurityScorecardV1PortfolioUpdateParams = {
  resource: 'portfolio';
  operation: 'update';
/**
 * Portfolio ID
 */
    portfolioId?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the portfolio
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Description
 */
    description?: string | Expression<string> | PlaceholderValue;
/**
 * Privacy
 * @default shared
 */
    privacy?: 'private' | 'shared' | 'team' | Expression<string>;
};

export type SecurityScorecardV1PortfolioUpdateNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1PortfolioUpdateParams>;
};