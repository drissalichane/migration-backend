/**
 * MISP Node - Version 1
 * Discriminator: resource=eventTag, operation=add
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1EventTagAddParams = {
  resource: 'eventTag';
  operation: 'add';
/**
 * UUID or numeric ID of the event
 */
    eventId?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    tagId?: string | Expression<string>;
};

export type MispV1EventTagAddNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1EventTagAddParams>;
};