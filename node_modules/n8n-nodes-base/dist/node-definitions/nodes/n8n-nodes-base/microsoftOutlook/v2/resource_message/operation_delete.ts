/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=message, operation=delete
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Delete a calendar */
export type MicrosoftOutlookV2MessageDeleteParams = {
  resource: 'message';
  operation: 'delete';
/**
 * Message
 * @default {"mode":"list","value":""}
 */
    messageId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2MessageDeleteOutput = {
  success?: boolean;
};

export type MicrosoftOutlookV2MessageDeleteNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageDeleteParams>;
  output?: Items<MicrosoftOutlookV2MessageDeleteOutput>;
};