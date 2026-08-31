/**
 * Microsoft Outlook Node - Version 1
 * Discriminator: resource=message, operation=move
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Move a message */
export type MicrosoftOutlookV1MessageMoveParams = {
  resource: 'message';
  operation: 'move';
/**
 * Message ID
 */
    messageId?: string | Expression<string> | PlaceholderValue;
/**
 * Target Folder ID
 */
    folderId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV1MessageMoveNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV1MessageMoveParams>;
};