/**
 * Plivo Node - Version 1
 * Discriminator: resource=mms, operation=send
 */


interface Credentials {
  plivoApi: CredentialReference;
}

/** Send an SMS message */
export type PlivoV1MmsSendParams = {
  resource: 'mms';
  operation: 'send';
/**
 * Plivo Number to send the MMS from
 */
    from?: string | Expression<string> | PlaceholderValue;
/**
 * Phone number to send the MMS to
 */
    to?: string | Expression<string> | PlaceholderValue;
/**
 * Message to send
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of media URLs of the files from your file server
 */
    media_urls?: string | Expression<string> | PlaceholderValue;
};

export type PlivoV1MmsSendNode = {
  type: 'n8n-nodes-base.plivo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PlivoV1MmsSendParams>;
};