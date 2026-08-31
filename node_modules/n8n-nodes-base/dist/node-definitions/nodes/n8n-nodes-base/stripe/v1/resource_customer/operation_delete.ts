/**
 * Stripe Node - Version 1
 * Discriminator: resource=customer, operation=delete
 */


interface Credentials {
  stripeApi: CredentialReference;
}

/** Delete a customer */
export type StripeV1CustomerDeleteParams = {
  resource: 'customer';
  operation: 'delete';
/**
 * ID of the customer to delete
 */
    customerId?: string | Expression<string> | PlaceholderValue;
};

export type StripeV1CustomerDeleteNode = {
  type: 'n8n-nodes-base.stripe';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StripeV1CustomerDeleteParams>;
};