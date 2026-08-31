/**
 * Cortex Node - Version 1
 * Discriminator: resource=job, operation=report
 */


interface Credentials {
  cortexApi: CredentialReference;
}

/** Get job report */
export type CortexV1JobReportParams = {
  resource: 'job';
  operation: 'report';
/**
 * ID of the job
 */
    jobId?: string | Expression<string> | PlaceholderValue;
};

export type CortexV1JobReportNode = {
  type: 'n8n-nodes-base.cortex';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CortexV1JobReportParams>;
};