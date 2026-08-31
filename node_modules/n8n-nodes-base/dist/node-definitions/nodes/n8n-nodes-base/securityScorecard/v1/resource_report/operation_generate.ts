/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=report, operation=generate
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Generate a report */
export type SecurityScorecardV1ReportGenerateParams = {
  resource: 'report';
  operation: 'generate';
/**
 * Report
 * @default detailed
 */
    report?: 'detailed' | 'events-json' | 'issues' | 'partnership' | 'summary' | 'full-scorecard-json' | 'portfolio' | 'scorecard-footprint' | Expression<string>;
/**
 * Primary identifier of a company or scorecard, i.e. domain.
 * @displayOptions.show { report: ["detailed", "events-json", "full-scorecard-json", "issues", "partnership", "scorecard-footprint", "summary"] }
 */
    scorecardIdentifier?: string | Expression<string> | PlaceholderValue;
/**
 * Portfolio ID
 * @displayOptions.show { report: ["portfolio"] }
 */
    portfolioId?: string | Expression<string> | PlaceholderValue;
/**
 * Branding
 * @displayOptions.show { report: ["detailed", "summary"] }
 * @default securityscorecard
 */
    branding?: 'securityscorecard' | 'company_and_securityscorecard' | 'company' | Expression<string>;
/**
 * Date
 * @displayOptions.show { report: ["events-json"] }
 */
    date?: string | Expression<string>;
/**
 * Options
 * @displayOptions.show { report: ["issues", "portfolio"] }
 * @default {}
 */
    options?: {
    /** Format
     * @default pdf
     */
    format?: 'csv' | 'pdf' | Expression<string>;
  };
};

export type SecurityScorecardV1ReportGenerateNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1ReportGenerateParams>;
};