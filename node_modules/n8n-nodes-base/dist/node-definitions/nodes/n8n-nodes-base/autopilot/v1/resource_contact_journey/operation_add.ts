/**
 * Autopilot Node - Version 1
 * Discriminator: resource=contactJourney, operation=add
 */


interface Credentials {
  autopilotApi: CredentialReference;
}

/** Add contact to list */
export type AutopilotV1ContactJourneyAddParams = {
  resource: 'contactJourney';
  operation: 'add';
/**
 * List ID. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    triggerId?: string | Expression<string>;
/**
 * Can be ID or email
 */
    contactId?: string | Expression<string> | PlaceholderValue;
};

export type AutopilotV1ContactJourneyAddNode = {
  type: 'n8n-nodes-base.autopilot';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AutopilotV1ContactJourneyAddParams>;
};