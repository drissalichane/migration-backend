/**
 * PagerDuty Node - Version 1
 * Discriminator: resource=logEntry, operation=get
 */


interface Credentials {
  pagerDutyApi: CredentialReference;
  pagerDutyOAuth2Api: CredentialReference;
}

/** Get an incident */
export type PagerDutyV1LogEntryGetParams = {
  resource: 'logEntry';
  operation: 'get';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for the log entry
 */
    logEntryId?: string | Expression<string> | PlaceholderValue;
};

export type PagerDutyV1LogEntryGetNode = {
  type: 'n8n-nodes-base.pagerDuty';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PagerDutyV1LogEntryGetParams>;
};