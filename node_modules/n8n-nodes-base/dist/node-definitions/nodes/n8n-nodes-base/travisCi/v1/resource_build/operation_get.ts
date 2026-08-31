/**
 * TravisCI Node - Version 1
 * Discriminator: resource=build, operation=get
 */


interface Credentials {
  travisCiApi: CredentialReference;
}

/** Get a build */
export type TravisCiV1BuildGetParams = {
  resource: 'build';
  operation: 'get';
/**
 * Value uniquely identifying the build
 */
    buildId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** List of attributes to eager load
     */
    include?: string | Expression<string> | PlaceholderValue;
  };
};

export type TravisCiV1BuildGetNode = {
  type: 'n8n-nodes-base.travisCi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TravisCiV1BuildGetParams>;
};