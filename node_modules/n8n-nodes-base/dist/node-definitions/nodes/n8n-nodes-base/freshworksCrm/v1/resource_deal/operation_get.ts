/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=deal, operation=get
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Retrieve an account */
export type FreshworksCrmV1DealGetParams = {
  resource: 'deal';
  operation: 'get';
/**
 * ID of the deal to retrieve
 */
    dealId?: string | Expression<string> | PlaceholderValue;
};

export type FreshworksCrmV1DealGetNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1DealGetParams>;
};