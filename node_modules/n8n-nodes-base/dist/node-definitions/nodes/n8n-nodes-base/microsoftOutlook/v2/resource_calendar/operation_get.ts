/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=calendar, operation=get
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Retrieve a calendar */
export type MicrosoftOutlookV2CalendarGetParams = {
  resource: 'calendar';
  operation: 'get';
/**
 * Calendar
 * @default {"mode":"list","value":""}
 */
    calendarId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftOutlookV2CalendarGetOutput = {
  '@odata.context'?: string;
  allowedOnlineMeetingProviders?: Array<string>;
  canEdit?: boolean;
  canShare?: boolean;
  canViewPrivateItems?: boolean;
  changeKey?: string;
  color?: string;
  defaultOnlineMeetingProvider?: string;
  hexColor?: string;
  id?: string;
  isDefaultCalendar?: boolean;
  isRemovable?: boolean;
  isTallyingResponses?: boolean;
  name?: string;
  owner?: {
    address?: string;
    name?: string;
  };
};

export type MicrosoftOutlookV2CalendarGetNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2CalendarGetParams>;
  output?: Items<MicrosoftOutlookV2CalendarGetOutput>;
};