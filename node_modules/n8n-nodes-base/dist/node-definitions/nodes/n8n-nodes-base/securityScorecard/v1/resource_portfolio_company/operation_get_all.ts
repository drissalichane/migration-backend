/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=portfolioCompany, operation=getAll
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Get many portfolios */
export type SecurityScorecardV1PortfolioCompanyGetAllParams = {
  resource: 'portfolioCompany';
  operation: 'getAll';
/**
 * Portfolio ID
 */
    portfolioId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Company score grade filter
     */
    grade?: string | Expression<string> | PlaceholderValue;
    /** Industry filter
     */
    industry?: string | Expression<string> | PlaceholderValue;
    /** Issue type filter
     */
    issueType?: string | Expression<string> | PlaceholderValue;
    /** Status
     */
    status?: 'active' | 'inactive' | Expression<string>;
    /** CVE vulnerability filter
     */
    vulnerability?: string | Expression<string> | PlaceholderValue;
  };
};

export type SecurityScorecardV1PortfolioCompanyGetAllNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1PortfolioCompanyGetAllParams>;
};