/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=message, operation=move
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Move a message to a folder */
export type MicrosoftOutlookV2MessageMoveParams = {
  resource: 'message';
  operation: 'move';
/**
 * Message
 * @default {"mode":"list","value":""}
 */
    messageId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Parent Folder
 * @default {"mode":"list","value":""}
 */
    folderId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2MessageMoveOutput = {
  success?: boolean;
};

export type MicrosoftOutlookV2MessageMoveNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2MessageMoveParams>;
  output?: Items<MicrosoftOutlookV2MessageMoveOutput>;
};