/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=messageAttachment, operation=add
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Add an attachment to a message */
export type MicrosoftOutlookV2MessageAttachmentAddParams = {
  resource: 'messageAttachment';
  operation: 'add';
/**
 * Message
 * @default {"mode":"list","value":""}
 */
    messageId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Input Data Field Name
 * @hint The name of the input field containing the binary file data to be attached
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Filename of the attachment. If not set will the file-name of the binary property be used, if it exists.
     */
    fileName?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV2MessageAttachmentAddNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageAttachmentAddParams>;
};