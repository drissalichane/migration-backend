/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=event, operation=get
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Retrieve a calendar */
export type MicrosoftOutlookV2EventGetParams = {
  resource: 'event';
  operation: 'get';
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
/**
 * Output
 * @default simple
 */
    output?: 'simple' | 'raw' | 'fields' | Expression<string>;
/**
 * The fields to add to the output
 * @displayOptions.show { output: ["fields"] }
 * @default []
 */
    fields?: Array<'allowNewTimeProposals' | 'attendees' | 'body' | 'bodyPreview' | 'categories' | 'changeKey' | 'createdDateTime' | 'end' | 'hasAttachments' | 'hideAttendees' | 'iCalUId' | 'importance' | 'isAllDay' | 'isCancelled' | 'isDraft' | 'isOnlineMeeting' | 'isOrganizer' | 'isReminderOn' | 'lastModifiedDateTime' | 'location' | 'locations' | 'onlineMeeting' | 'onlineMeetingProvider' | 'onlineMeetingUrl' | 'organizer' | 'originalEndTimeZone' | 'originalStartTimeZone' | 'recurrence' | 'reminderMinutesBeforeStart' | 'responseRequested' | 'responseStatus' | 'sensitivity' | 'seriesMasterId' | 'showAs' | 'start' | 'subject' | 'transactionId' | 'type' | 'webLink'>;
};

export type MicrosoftOutlookV2EventGetOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  attendees?: Array<{
    emailAddress?: {
      address?: string;
      name?: string;
    };
    status?: {
      response?: string;
      time?: string;
    };
    type?: string;
  }>;
  bodyPreview?: string;
  'calendar@odata.associationLink'?: string;
  'calendar@odata.navigationLink'?: string;
  end?: {
    dateTime?: string;
    timeZone?: string;
  };
  id?: string;
  organizer?: {
    emailAddress?: {
      address?: string;
      name?: string;
    };
  };
  start?: {
    dateTime?: string;
    timeZone?: string;
  };
  subject?: string;
  webLink?: string;
};

export type MicrosoftOutlookV2EventGetNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2EventGetParams>;
  output?: Items<MicrosoftOutlookV2EventGetOutput>;
};