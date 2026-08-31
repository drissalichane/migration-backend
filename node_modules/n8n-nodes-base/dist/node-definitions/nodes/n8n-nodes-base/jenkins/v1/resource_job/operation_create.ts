/**
 * Jenkins Node - Version 1
 * Discriminator: resource=job, operation=create
 */


interface Credentials {
  jenkinsApi: CredentialReference;
}

/** Create a new job */
export type JenkinsV1JobCreateParams = {
  resource: 'job';
  operation: 'create';
/**
 * Name of the new Jenkins job
 */
    newJob?: string | Expression<string> | PlaceholderValue;
/**
 * XML of Jenkins config
 */
    xml?: string | Expression<string> | PlaceholderValue;
};

export type JenkinsV1JobCreateNode = {
  type: 'n8n-nodes-base.jenkins';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JenkinsV1JobCreateParams>;
};