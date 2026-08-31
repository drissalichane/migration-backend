/**
 * seven Node - Version 1
 * Discriminator: resource=voice, operation=send
 */


interface Credentials {
  sms77Api: CredentialReference;
}

/** Send SMS */
export type Sms77V1VoiceSendParams = {
  resource: 'voice';
  operation: 'send';
/**
 * The number of your recipient(s) separated by comma. Can be regular numbers or contact/groups from seven.
 */
    to?: string | Expression<string> | PlaceholderValue;
/**
 * The message to send. Max. 1520 characters
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** The caller ID. Please use only verified sender IDs, one of your virtual inbound numbers or one of our shared virtual numbers.
     */
    from?: string | Expression<string> | PlaceholderValue;
  };
};

export type Sms77V1VoiceSendNode = {
  type: 'n8n-nodes-base.sms77';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<Sms77V1VoiceSendParams>;
};