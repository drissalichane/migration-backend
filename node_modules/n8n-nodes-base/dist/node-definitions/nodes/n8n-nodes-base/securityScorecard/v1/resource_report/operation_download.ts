/**
 * SecurityScorecard Node - Version 1
 * Discriminator: resource=report, operation=download
 */


interface Credentials {
  securityScorecardApi: CredentialReference;
}

/** Download a generated report */
export type SecurityScorecardV1ReportDownloadParams = {
  resource: 'report';
  operation: 'download';
/**
 * URL to a generated report
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type SecurityScorecardV1ReportDownloadNode = {
  type: 'n8n-nodes-base.securityScorecard';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SecurityScorecardV1ReportDownloadParams>;
};