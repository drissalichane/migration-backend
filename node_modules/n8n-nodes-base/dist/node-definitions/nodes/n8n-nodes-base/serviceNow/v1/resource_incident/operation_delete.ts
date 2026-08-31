/**
 * ServiceNow Node - Version 1
 * Discriminator: resource=incident, operation=delete
 */


interface Credentials {
  serviceNowOAuth2Api: CredentialReference;
  serviceNowBasicApi: CredentialReference;
}

/** Delete an attachment */
export type ServiceNowV1IncidentDeleteParams = {
  resource: 'incident';
  operation: 'delete';
/**
 * Authentication method to use
 * @default oAuth2
 */
    authentication?: 'basicAuth' | 'oAuth2' | Expression<string>;
/**
 * Unique identifier of the incident
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type ServiceNowV1IncidentDeleteNode = {
  type: 'n8n-nodes-base.serviceNow';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ServiceNowV1IncidentDeleteParams>;
};