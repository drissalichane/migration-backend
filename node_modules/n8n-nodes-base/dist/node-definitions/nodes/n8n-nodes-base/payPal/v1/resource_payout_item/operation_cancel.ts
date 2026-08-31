/**
 * PayPal Node - Version 1
 * Discriminator: resource=payoutItem, operation=cancel
 */


interface Credentials {
  payPalApi: CredentialReference;
}

/** Cancels an unclaimed payout item */
export type PayPalV1PayoutItemCancelParams = {
  resource: 'payoutItem';
  operation: 'cancel';
/**
 * The ID of the payout item to cancel
 */
    payoutItemId?: string | Expression<string> | PlaceholderValue;
};

export type PayPalV1PayoutItemCancelNode = {
  type: 'n8n-nodes-base.payPal';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PayPalV1PayoutItemCancelParams>;
};