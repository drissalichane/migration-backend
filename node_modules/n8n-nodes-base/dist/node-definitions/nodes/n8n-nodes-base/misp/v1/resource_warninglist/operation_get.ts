/**
 * MISP Node - Version 1
 * Discriminator: resource=warninglist, operation=get
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1WarninglistGetParams = {
  resource: 'warninglist';
  operation: 'get';
/**
 * Numeric ID of the warninglist
 */
    warninglistId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1WarninglistGetNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1WarninglistGetParams>;
};