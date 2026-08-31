/**
 * MISP Node - Version 1
 * Discriminator: resource=event, operation=unpublish
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1EventUnpublishParams = {
  resource: 'event';
  operation: 'unpublish';
/**
 * UUID or numeric ID of the event
 */
    eventId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1EventUnpublishNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1EventUnpublishParams>;
};