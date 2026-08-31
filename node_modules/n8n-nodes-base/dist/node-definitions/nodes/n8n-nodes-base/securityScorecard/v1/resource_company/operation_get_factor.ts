/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=company, operation=getFactor
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Get company factor scores and issue counts */
export type SecurityScorecardV1CompanyGetFactorParams = {
  resource: 'company';
  operation: 'getFactor';
/**
 * Primary identifier of a company or scorecard, i.e. domain.
 */
    scorecardIdentifier?: string | Expression<string> | PlaceholderValue;
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
    /** Severity
     */
    severity?: string | Expression<string> | PlaceholderValue;
    /** Filter issues by comma-separated severity list
     */
    severity_in?: string | Expression<string> | PlaceholderValue;
  };
};

export type SecurityScorecardV1CompanyGetFactorNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1CompanyGetFactorParams>;
};