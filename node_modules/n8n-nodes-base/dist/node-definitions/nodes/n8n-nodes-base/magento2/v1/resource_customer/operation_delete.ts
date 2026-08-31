/**
 * Magento 2 Node - Version 1
 * Discriminator: resource=customer, operation=delete
 */


interface Credentials {
  magento2Api: CredentialReference;
}

/** Delete a customer */
export type Magento2V1CustomerDeleteParams = {
  resource: 'customer';
  operation: 'delete';
/**
 * Customer ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
};

export type Magento2V1CustomerDeleteNode = {
  type: 'n8n-nodes-base.magento2';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<Magento2V1CustomerDeleteParams>;
};