/**
 * Raindrop Node - Version 1
 * Discriminator: resource=user, operation=get
 */


interface Credentials {
  raindropOAuth2Api: CredentialReference;
}

export type RaindropV1UserGetParams = {
  resource: 'user';
  operation: 'get';
/**
 * Whether to return details on the logged-in user
 * @default true
 */
    self?: boolean | Expression<boolean>;
/**
 * The ID of the user to retrieve
 * @displayOptions.show { self: [false] }
 */
    userId?: string | Expression<string> | PlaceholderValue;
};

export type RaindropV1UserGetNode = {
  type: 'n8n-nodes-base.raindrop';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RaindropV1UserGetParams>;
};