/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=calendar, operation=update
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Update a calendar */
export type MicrosoftOutlookV2CalendarUpdateParams = {
  resource: 'calendar';
  operation: 'update';
/**
 * Calendar
 * @default {"mode":"list","value":""}
 */
    calendarId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Specify the color to distinguish the calendar from the others
     * @default lightBlue
     */
    color?: 'lightBlue' | 'lightBrown' | 'lightGray' | 'lightGreen' | 'lightOrange' | 'lightPink' | 'lightRed' | 'lightTeal' | 'lightYellow' | Expression<string>;
    /** Default Calendar
     * @default false
     */
    isDefaultCalendar?: boolean | Expression<boolean>;
    /** The name of the calendar
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV2CalendarUpdateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2CalendarUpdateParams>;
};