/**
 * Mocean Node - Version 1
 * Discriminator: resource=sms, operation=send
 */


interface Credentials {
  moceanApi: CredentialReference;
}

/** Send SMS/Voice message */
export type MoceanV1SmsSendParams = {
  resource: 'sms';
  operation: 'send';
/**
 * Number to which to send the message
 */
    from?: string | Expression<string> | PlaceholderValue;
/**
 * Number from which to send the message
 */
    to?: string | Expression<string> | PlaceholderValue;
/**
 * Message to send
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Delivery Report URL
     */
    dlrUrl?: string | Expression<string> | PlaceholderValue;
  };
};

export type MoceanV1SmsSendNode = {
  type: 'n8n-nodes-base.mocean';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MoceanV1SmsSendParams>;
};