/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=event, operation=update
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Update a calendar */
export type MicrosoftOutlookV2EventUpdateParams = {
  resource: 'event';
  operation: 'update';
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
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    categories?: string[];
    /** Description
     */
    body?: string | Expression<string> | PlaceholderValue;
    /** Description Preview
     */
    bodyPreview?: string | Expression<string> | PlaceholderValue;
    /** End
     */
    end?: string | Expression<string>;
    /** Whether to allow each attendee to only see themselves in the meeting request and meeting tracking list
     * @default false
     */
    hideAttendees?: boolean | Expression<boolean>;
    /** Importance
     * @default low
     */
    importance?: 'low' | 'normal' | 'high' | Expression<string>;
    /** Is All Day
     * @default false
     */
    isAllDay?: boolean | Expression<boolean>;
    /** Is Cancelled
     * @default false
     */
    isCancelled?: boolean | Expression<boolean>;
    /** Is Draft
     * @default false
     */
    isDraft?: boolean | Expression<boolean>;
    /** Is Online Meeting
     * @default true
     */
    isOnlineMeeting?: boolean | Expression<boolean>;
    /** Sensitivity
     * @default normal
     */
    sensitivity?: 'normal' | 'personal' | 'private' | 'confidential' | Expression<string>;
    /** Show As
     * @default free
     */
    showAs?: 'busy' | 'free' | 'oof' | 'tentative' | 'workingElsewhere' | Expression<string>;
    /** Start
     */
    start?: string | Expression<string>;
    /** Timezone
     */
    timeZone?: string | Expression<string> | PlaceholderValue;
    /** Title
     */
    subject?: string | Expression<string> | PlaceholderValue;
    /** Type
     * @default singleInstance
     */
    type?: 'singleInstance' | 'occurrence' | 'exception' | 'seriesMaster' | Expression<string>;
  };
};

export type MicrosoftOutlookV2EventUpdateOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  allowNewTimeProposals?: boolean;
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
  body?: {
    content?: string;
    contentType?: string;
  };
  bodyPreview?: string;
  categories?: Array<string>;
  changeKey?: string;
  createdDateTime?: string;
  end?: {
    dateTime?: string;
    timeZone?: string;
  };
  hasAttachments?: boolean;
  hideAttendees?: boolean;
  iCalUId?: string;
  id?: string;
  importance?: string;
  isAllDay?: boolean;
  isCancelled?: boolean;
  isDraft?: boolean;
  isOnlineMeeting?: boolean;
  isOrganizer?: boolean;
  isReminderOn?: boolean;
  lastModifiedDateTime?: string;
  location?: {
    displayName?: string;
    locationType?: string;
    uniqueIdType?: string;
  };
  locations?: Array<{
    displayName?: string;
    locationType?: string;
    uniqueId?: string;
    uniqueIdType?: string;
  }>;
  occurrenceId?: null;
  onlineMeetingProvider?: string;
  organizer?: {
    emailAddress?: {
      address?: string;
      name?: string;
    };
  };
  originalEndTimeZone?: string;
  originalStartTimeZone?: string;
  recurrence?: null;
  reminderMinutesBeforeStart?: number;
  responseRequested?: boolean;
  responseStatus?: {
    response?: string;
    time?: string;
  };
  sensitivity?: string;
  seriesMasterId?: null;
  showAs?: string;
  start?: {
    dateTime?: string;
    timeZone?: string;
  };
  subject?: string;
  type?: string;
  uid?: string;
  webLink?: string;
};

export type MicrosoftOutlookV2EventUpdateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2EventUpdateParams>;
  output?: Items<MicrosoftOutlookV2EventUpdateOutput>;
};