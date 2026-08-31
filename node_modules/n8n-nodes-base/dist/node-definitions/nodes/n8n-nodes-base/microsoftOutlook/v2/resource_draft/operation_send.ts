/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=draft, operation=send
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Send an existing email draft */
export type MicrosoftOutlookV2DraftSendParams = {
  resource: 'draft';
  operation: 'send';
/**
 * Draft
 * @default {"mode":"list","value":""}
 */
    draftId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Comma-separated list of email addresses of recipients
 */
    to?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftOutlookV2DraftSendOutput = {
  success?: boolean;
};

export type MicrosoftOutlookV2DraftSendNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2DraftSendParams>;
  output?: Items<MicrosoftOutlookV2DraftSendOutput>;
};