/**
 * GoToWebinar Node - Version 1
 * Discriminator: resource=attendee, operation=getDetails
 */


interface Credentials {
  goToWebinarOAuth2Api: CredentialReference;
}

export type GoToWebinarV1AttendeeGetDetailsParams = {
  resource: 'attendee';
  operation: 'getDetails';
/**
 * Key of the webinar that the attendee attended. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    webinarKey?: string | Expression<string>;
/**
 * Key of the session that the attendee attended. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    sessionKey?: string | Expression<string>;
/**
 * Registrant key of the attendee at the webinar session
 */
    registrantKey?: string | Expression<string> | PlaceholderValue;
/**
 * The details to retrieve for the attendee
 */
    details?: 'polls' | 'questions' | 'surveyAnswers' | Expression<string>;
};

export type GoToWebinarV1AttendeeGetDetailsNode = {
  type: 'n8n-nodes-base.goToWebinar';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoToWebinarV1AttendeeGetDetailsParams>;
};