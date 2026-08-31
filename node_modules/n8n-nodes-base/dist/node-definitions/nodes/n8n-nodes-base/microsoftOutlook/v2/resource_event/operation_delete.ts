/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=event, operation=delete
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Delete a calendar */
export type MicrosoftOutlookV2EventDeleteParams = {
  resource: 'event';
  operation: 'delete';
/**
 * Calendar
 * @default {"mode":"list","value":""}
 */
    calendarId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Event
 * @default {"mode":"list","value":""}
 */
    eventId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2EventDeleteOutput = {
  success?: boolean;
};

export type MicrosoftOutlookV2EventDeleteNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2EventDeleteParams>;
  output?: Items<MicrosoftOutlookV2EventDeleteOutput>;
};