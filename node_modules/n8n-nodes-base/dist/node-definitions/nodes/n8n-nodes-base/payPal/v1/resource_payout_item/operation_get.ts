/**
 * PayPal Node - Version 1
 * Discriminator: resource=payoutItem, operation=get
 */


interface Credentials {
  payPalApi: CredentialReference;
}

/** Show batch payout details */
export type PayPalV1PayoutItemGetParams = {
  resource: 'payoutItem';
  operation: 'get';
/**
 * The ID of the payout item for which to show details
 */
    payoutItemId?: string | Expression<string> | PlaceholderValue;
};

export type PayPalV1PayoutItemGetNode = {
  type: 'n8n-nodes-base.payPal';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PayPalV1PayoutItemGetParams>;
};