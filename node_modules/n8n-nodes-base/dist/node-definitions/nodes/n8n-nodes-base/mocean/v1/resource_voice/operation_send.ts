/**
 * Mocean Node - Version 1
 * Discriminator: resource=voice, operation=send
 */


interface Credentials {
  moceanApi: CredentialReference;
}

/** Send SMS/Voice message */
export type MoceanV1VoiceSendParams = {
  resource: 'voice';
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
 * Language
 * @default en-US
 */
    language?: 'cmn-CN' | 'en-GB' | 'en-US' | 'ja-JP' | 'ko-KR' | Expression<string>;
/**
 * Message to send
 */
    message?: string | Expression<string> | PlaceholderValue;
};

export type MoceanV1VoiceSendNode = {
  type: 'n8n-nodes-base.mocean';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MoceanV1VoiceSendParams>;
};