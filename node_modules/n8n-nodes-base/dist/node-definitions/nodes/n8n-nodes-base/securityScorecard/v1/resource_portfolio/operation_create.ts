/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=portfolio, operation=create
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Create an invite for a company/user */
export type SecurityScorecardV1PortfolioCreateParams = {
  resource: 'portfolio';
  operation: 'create';
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

export type SecurityScorecardV1PortfolioCreateNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1PortfolioCreateParams>;
};