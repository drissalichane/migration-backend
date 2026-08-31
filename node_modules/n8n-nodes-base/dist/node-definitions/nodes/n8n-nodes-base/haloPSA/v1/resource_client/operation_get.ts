/**
 * HaloPSA Node - Version 1
 * Discriminator: resource=client, operation=get
 */


interface Credentials {
  haloPSAApi: CredentialReference;
}

/** Get a client */
export type HaloPSAV1ClientGetParams = {
  resource: 'client';
  operation: 'get';
/**
 * Client ID
 */
    clientId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simplify?: boolean | Expression<boolean>;
};

export type HaloPSAV1ClientGetOutput = {
  id?: number;
  is_vip?: boolean;
  name?: string;
  website?: string;
};

export type HaloPSAV1ClientGetNode = {
  type: 'n8n-nodes-base.haloPSA';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HaloPSAV1ClientGetParams>;
  output?: Items<HaloPSAV1ClientGetOutput>;
};