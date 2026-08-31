/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=calendar, operation=delete
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Delete a calendar */
export type MicrosoftOutlookV2CalendarDeleteParams = {
  resource: 'calendar';
  operation: 'delete';
/**
 * Calendar
 * @default {"mode":"list","value":""}
 */
    calendarId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2CalendarDeleteNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2CalendarDeleteParams>;
};