/**
 * Google Calendar Node - Version 1.3
 * Discriminator: resource=event, operation=get
 */


interface Credentials {
  googleCalendarOAuth2Api: CredentialReference;
}

/** Retrieve an event */
export type GoogleCalendarV13EventGetParams = {
  resource: 'event';
  operation: 'get';
/**
 * Google Calendar to operate on
 * @default {"mode":"list","value":""}
 */
    calendar?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Event ID
 */
    eventId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned.
     * @default 0
     */
    maxAttendees?: number | Expression<number>;
    /** Whether to return the next instance of a recurring event instead of the event itself
     * @default false
     */
    returnNextInstance?: boolean | Expression<boolean>;
    /** Time zone used in the response. The default is the time zone of the calendar.
     * @default {"mode":"list","value":""}
     */
    timeZone?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
  };
};

export type GoogleCalendarV13EventGetOutput = {
  created?: string;
  creator?: {
    email?: string;
    self?: boolean;
  };
  description?: string;
  end?: {
    dateTime?: string;
    timeZone?: string;
  };
  etag?: string;
  eventType?: string;
  htmlLink?: string;
  iCalUID?: string;
  id?: string;
  kind?: string;
  location?: string;
  organizer?: {
    displayName?: string;
    email?: string;
    self?: boolean;
  };
  reminders?: {
    useDefault?: boolean;
  };
  sequence?: number;
  start?: {
    dateTime?: string;
    timeZone?: string;
  };
  status?: string;
  summary?: string;
  updated?: string;
};

export type GoogleCalendarV13EventGetNode = {
  type: 'n8n-nodes-base.googleCalendar';
  version: 1.3;
  credentials?: Credentials;
  config: NodeConfig<GoogleCalendarV13EventGetParams>;
  output?: Items<GoogleCalendarV13EventGetOutput>;
};