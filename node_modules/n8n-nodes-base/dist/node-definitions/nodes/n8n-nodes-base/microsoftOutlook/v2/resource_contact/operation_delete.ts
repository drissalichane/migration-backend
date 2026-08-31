/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=contact, operation=delete
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Delete a calendar */
export type MicrosoftOutlookV2ContactDeleteParams = {
  resource: 'contact';
  operation: 'delete';
/**
 * Contact
 * @default {"mode":"list","value":""}
 */
    contactId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2ContactDeleteOutput = {
  success?: boolean;
};

export type MicrosoftOutlookV2ContactDeleteNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2ContactDeleteParams>;
  output?: Items<MicrosoftOutlookV2ContactDeleteOutput>;
};