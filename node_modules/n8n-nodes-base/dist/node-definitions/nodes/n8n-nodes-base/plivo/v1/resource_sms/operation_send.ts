/**
 * Plivo Node - Version 1
 * Discriminator: resource=sms, operation=send
 */


interface Credentials {
  plivoApi: CredentialReference;
}

/** Send an SMS message */
export type PlivoV1SmsSendParams = {
  resource: 'sms';
  operation: 'send';
/**
 * Plivo Number to send the SMS from
 */
    from?: string | Expression<string> | PlaceholderValue;
/**
 * Phone number to send the message to
 */
    to?: string | Expression<string> | PlaceholderValue;
/**
 * Message to send
 */
    message?: string | Expression<string> | PlaceholderValue;
};

export type PlivoV1SmsSendNode = {
  type: 'n8n-nodes-base.plivo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PlivoV1SmsSendParams>;
};