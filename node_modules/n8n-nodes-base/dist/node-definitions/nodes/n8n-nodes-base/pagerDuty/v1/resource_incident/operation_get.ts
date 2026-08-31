/**
 * PagerDuty Node - Version 1
 * Discriminator: resource=incident, operation=get
 */


interface Credentials {
  pagerDutyApi: CredentialReference;
  pagerDutyOAuth2Api: CredentialReference;
}

/** Get an incident */
export type PagerDutyV1IncidentGetParams = {
  resource: 'incident';
  operation: 'get';
  authentication?: 'apiToken' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier for the incident
 */
    incidentId?: string | Expression<string> | PlaceholderValue;
};

export type PagerDutyV1IncidentGetNode = {
  type: 'n8n-nodes-base.pagerDuty';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PagerDutyV1IncidentGetParams>;
};