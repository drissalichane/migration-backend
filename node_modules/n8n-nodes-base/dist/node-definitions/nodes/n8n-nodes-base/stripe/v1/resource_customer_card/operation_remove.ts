/**
 * Stripe Node - Version 1
 * Discriminator: resource=customerCard, operation=remove
 */


interface Credentials {
  stripeApi: CredentialReference;
}

/** Remove a customer card */
export type StripeV1CustomerCardRemoveParams = {
  resource: 'customerCard';
  operation: 'remove';
/**
 * ID of the customer whose card to remove
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the card to remove
 */
    cardId?: string | Expression<string> | PlaceholderValue;
};

export type StripeV1CustomerCardRemoveNode = {
  type: 'n8n-nodes-base.stripe';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StripeV1CustomerCardRemoveParams>;
};