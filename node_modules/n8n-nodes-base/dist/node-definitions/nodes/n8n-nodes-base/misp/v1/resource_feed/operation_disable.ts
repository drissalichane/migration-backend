/**
 * MISP Node - Version 1
 * Discriminator: resource=feed, operation=disable
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1FeedDisableParams = {
  resource: 'feed';
  operation: 'disable';
/**
 * UUID or numeric ID of the feed
 */
    feedId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1FeedDisableNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1FeedDisableParams>;
};