/**
 * Splunk Node - Version 2
 * Discriminator: resource=report, operation=deleteReport
 */


interface Credentials {
  splunkApi: CredentialReference;
}

/** Delete a search report */
export type SplunkV2ReportDeleteReportParams = {
  resource: 'report';
  operation: 'deleteReport';
/**
 * Report
 * @default {"mode":"list","value":""}
 */
    reportId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type SplunkV2ReportDeleteReportNode = {
  type: 'n8n-nodes-base.splunk';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<SplunkV2ReportDeleteReportParams>;
};