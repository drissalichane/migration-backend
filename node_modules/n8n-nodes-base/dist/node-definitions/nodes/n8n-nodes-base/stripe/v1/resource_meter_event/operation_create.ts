/**
 * Stripe Node - Version 1
 * Discriminator: resource=meterEvent, operation=create
 */


interface Credentials {
  stripeApi: CredentialReference;
}

/** Create a charge */
export type StripeV1MeterEventCreateParams = {
  resource: 'meterEvent';
  operation: 'create';
/**
 * The name of the meter event. Corresponds with the event_name field on a meter.
 */
    eventName?: string | Expression<string> | PlaceholderValue;
/**
 * The Stripe customer ID associated with this meter event
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * The value of the meter event. Must be an integer. Can be positive or negative.
 * @default 1
 */
    value?: number | Expression<number>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** A unique identifier for the event. If not provided, one will be generated. Uniqueness is enforced within a rolling 24 hour window.
     */
    identifier?: string | Expression<string> | PlaceholderValue;
    /** The time of the event. Measured in seconds since the Unix epoch. Must be within the past 35 calendar days or up to 5 minutes in the future. Defaults to current time if not specified.
     */
    timestamp?: string | Expression<string>;
    /** Additional custom properties to include in the event payload. Use this for custom meter configurations with non-default payload keys.
     * @default {}
     */
    customPayload?: {
        /** Properties
     */
    properties?: Array<{
      /** The property key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** The property value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type StripeV1MeterEventCreateNode = {
  type: 'n8n-nodes-base.stripe';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StripeV1MeterEventCreateParams>;
};