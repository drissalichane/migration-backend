/**
 * MISP Node - Version 1
 * Discriminator: resource=feed, operation=get
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1FeedGetParams = {
  resource: 'feed';
  operation: 'get';
/**
 * UUID or numeric ID of the feed
 */
    feedId?: string | Expression<string> | PlaceholderValue;
};

export type MispV1FeedGetNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1FeedGetParams>;
};