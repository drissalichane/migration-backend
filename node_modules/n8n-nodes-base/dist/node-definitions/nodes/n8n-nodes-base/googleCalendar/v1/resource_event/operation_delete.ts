/**
 * Google Calendar Node - Version 1
 * Discriminator: resource=event, operation=delete
 */


interface Credentials {
  googleCalendarOAuth2Api: CredentialReference;
}

/** Delete an event */
export type GoogleCalendarV1EventDeleteParams = {
  resource: 'event';
  operation: 'delete';
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
    /** Whether to send notifications about the creation of the new event
     */
    sendUpdates?: 'all' | 'externalOnly' | 'none' | Expression<string>;
  };
};

export type GoogleCalendarV1EventDeleteOutput = {
  success?: boolean;
};

export type GoogleCalendarV1EventDeleteNode = {
  type: 'n8n-nodes-base.googleCalendar';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleCalendarV1EventDeleteParams>;
  output?: Items<GoogleCalendarV1EventDeleteOutput>;
};