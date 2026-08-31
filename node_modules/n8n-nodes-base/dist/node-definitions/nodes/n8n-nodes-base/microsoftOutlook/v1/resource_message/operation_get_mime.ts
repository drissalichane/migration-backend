/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=message, operation=getMime
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Get MIME content of a message */
export type MicrosoftOutlookV1MessageGetMimeParams = {
  resource: 'message';
  operation: 'getMime';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV1MessageGetMimeNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1MessageGetMimeParams>;
};