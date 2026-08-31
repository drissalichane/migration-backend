/**
 * MISP Node - Version 1
 * Discriminator: resource=event, operation=get
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1EventGetParams = {
  resource: 'event';
  operation: 'get';
/**
 * UUID or numeric ID of the event
 */
    eventId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1EventGetNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1EventGetParams>;
};