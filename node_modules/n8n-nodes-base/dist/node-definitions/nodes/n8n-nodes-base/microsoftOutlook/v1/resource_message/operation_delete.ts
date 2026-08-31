/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=message, operation=delete
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Delete a draft */
export type MicrosoftOutlookV1MessageDeleteParams = {
  resource: 'message';
  operation: 'delete';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV1MessageDeleteNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1MessageDeleteParams>;
};