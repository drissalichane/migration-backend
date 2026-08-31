/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=deal, operation=delete
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Delete an account */
export type FreshworksCrmV1DealDeleteParams = {
  resource: 'deal';
  operation: 'delete';
/**
 * ID of the deal to delete
 */
    dealId?: string | Expression<string> | PlaceholderValue;
};

export type FreshworksCrmV1DealDeleteNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1DealDeleteParams>;
};