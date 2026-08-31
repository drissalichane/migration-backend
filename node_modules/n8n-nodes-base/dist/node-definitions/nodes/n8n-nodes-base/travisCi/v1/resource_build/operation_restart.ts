/**
 * TravisCI Node - Version 1
 * Discriminator: resource=build, operation=restart
 */


interface Credentials {
  travisCiApi: CredentialReference;
}

/** Restart a build */
export type TravisCiV1BuildRestartParams = {
  resource: 'build';
  operation: 'restart';
/**
 * Value uniquely identifying the build
 */
    buildId?: string | Expression<string> | PlaceholderValue;
};

export type TravisCiV1BuildRestartNode = {
  type: 'n8n-nodes-base.travisCi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TravisCiV1BuildRestartParams>;
};