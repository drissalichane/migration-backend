/**
 * Stripe Node - Version 1
 * Discriminator: resource=customer, operation=get
 */


interface Credentials {
  stripeApi: CredentialReference;
}

/** Get a balance */
export type StripeV1CustomerGetParams = {
  resource: 'customer';
  operation: 'get';
/**
 * ID of the customer to retrieve
 */
    customerId?: string | Expression<string> | PlaceholderValue;
};

export type StripeV1CustomerGetOutput = {
  balance?: number;
  created?: number;
  delinquent?: boolean;
  id?: string;
  invoice_prefix?: string;
  invoice_settings?: {
    footer?: null;
  };
  livemode?: boolean;
  object?: string;
  preferred_locales?: Array<string>;
  tax_exempt?: string;
};

export type StripeV1CustomerGetNode = {
  type: 'n8n-nodes-base.stripe';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StripeV1CustomerGetParams>;
  output?: Items<StripeV1CustomerGetOutput>;
};