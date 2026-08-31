/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Get a client */
export type HaloPSAV1UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * User ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simplify?: boolean | Expression<boolean>;
};

export type HaloPSAV1UserGetNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1UserGetParams>;
};