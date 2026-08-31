/**
 * TravisCI Node - Version 1
 * Discriminator: resource=build, operation=cancel
 */


interface Credentials {
  travisCiApi: CredentialReference;
}

/** Cancel a build */
export type TravisCiV1BuildCancelParams = {
  resource: 'build';
  operation: 'cancel';
/**
 * Value uniquely identifying the build
 */
    buildId?: string | Expression<string> | PlaceholderValue;
};

export type TravisCiV1BuildCancelNode = {
  type: 'n8n-nodes-base.travisCi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TravisCiV1BuildCancelParams>;
};