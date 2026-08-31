/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=event, operation=getAll
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** List and search calendars */
export type MicrosoftOutlookV2EventGetAllParams = {
  resource: 'event';
  operation: 'getAll';
/**
 * From All Calendars
 * @default true
 */
    fromAllCalendars?: boolean | Expression<boolean>;
/**
 * Calendar
 * @displayOptions.show { fromAllCalendars: [false] }
 * @default {"mode":"list","value":""}
 */
    calendarId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
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
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Filter Query
     * @hint Search query to filter events. &lt;a href="https://learn.microsoft.com/en-us/graph/filter-query-parameter"&gt;More info&lt;/a&gt;.
     */
    custom?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV2EventGetAllOutput = {
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

export type MicrosoftOutlookV2EventGetAllNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2EventGetAllParams>;
  output?: Items<MicrosoftOutlookV2EventGetAllOutput>;
};