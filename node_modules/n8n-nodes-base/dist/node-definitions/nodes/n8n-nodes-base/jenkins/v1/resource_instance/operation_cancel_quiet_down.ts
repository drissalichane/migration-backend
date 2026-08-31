/**
 * Jenkins Node - Version 1
 * Discriminator: resource=instance, operation=cancelQuietDown
 */


interface Credentials {
  jenkinsApi: CredentialReference;
}

/** Cancel quiet down state */
export type JenkinsV1InstanceCancelQuietDownParams = {
  resource: 'instance';
  operation: 'cancelQuietDown';
};

export type JenkinsV1InstanceCancelQuietDownNode = {
  type: 'n8n-nodes-base.jenkins';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<JenkinsV1InstanceCancelQuietDownParams>;
};