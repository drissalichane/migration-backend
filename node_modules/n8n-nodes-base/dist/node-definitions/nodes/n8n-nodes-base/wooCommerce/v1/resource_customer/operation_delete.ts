/**
 * WooCommerce Node - Version 1
 * Discriminator: resource=customer, operation=delete
 */


interface Credentials {
  wooCommerceApi: CredentialReference;
}

/** Delete a customer */
export type WooCommerceV1CustomerDeleteParams = {
  resource: 'customer';
  operation: 'delete';
/**
 * ID of the customer to delete
 */
    customerId?: string | Expression<string> | PlaceholderValue;
};

export type WooCommerceV1CustomerDeleteNode = {
  type: 'n8n-nodes-base.wooCommerce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WooCommerceV1CustomerDeleteParams>;
};