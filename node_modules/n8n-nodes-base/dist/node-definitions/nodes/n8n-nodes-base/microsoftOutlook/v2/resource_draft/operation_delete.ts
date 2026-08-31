/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=draft, operation=delete
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Delete a calendar */
export type MicrosoftOutlookV2DraftDeleteParams = {
  resource: 'draft';
  operation: 'delete';
/**
 * Draft
 * @default {"mode":"list","value":""}
 */
    draftId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2DraftDeleteNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2DraftDeleteParams>;
};