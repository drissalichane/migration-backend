/**
 * Cortex Node - Version 1
 * Discriminator: resource=job, operation=get
 */


interface Credentials {
  cortexApi: CredentialReference;
}

/** Get job details */
export type CortexV1JobGetParams = {
  resource: 'job';
  operation: 'get';
/**
 * ID of the job
 */
    jobId?: string | Expression<string> | PlaceholderValue;
};

export type CortexV1JobGetNode = {
  type: 'n8n-nodes-base.cortex';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CortexV1JobGetParams>;
};