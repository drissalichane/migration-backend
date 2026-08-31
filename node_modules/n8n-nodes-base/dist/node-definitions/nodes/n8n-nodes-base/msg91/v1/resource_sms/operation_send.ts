/**
 * MSG91 Node - Version 1
 * Discriminator: resource=sms, operation=send
 */


interface Credentials {
  msg91Api: CredentialReference;
}

/** Send SMS */
export type Msg91V1SmsSendParams = {
  resource: 'sms';
  operation: 'send';
/**
 * The number from which to send the message
 */
    from?: string | Expression<string> | PlaceholderValue;
/**
 * The number, with coutry code, to which to send the message
 */
    to?: string | Expression<string> | PlaceholderValue;
/**
 * The message to send
 */
    message?: string | Expression<string> | PlaceholderValue;
};

export type Msg91V1SmsSendNode = {
  type: 'n8n-nodes-base.msg91';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<Msg91V1SmsSendParams>;
};