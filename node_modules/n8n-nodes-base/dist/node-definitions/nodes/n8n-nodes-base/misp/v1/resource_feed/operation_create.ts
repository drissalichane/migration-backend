/**
 * MISP Node - Version 1
 * Discriminator: resource=feed, operation=create
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1FeedCreateParams = {
  resource: 'feed';
  operation: 'create';
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Provider
 */
    provider?: string | Expression<string> | PlaceholderValue;
/**
 * URL
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Who will be able to see this event once published
     * @default 0
     */
    distribution?: 3 | 2 | 5 | 4 | 1 | 0 | Expression<number>;
    /** Filter rules for the feed
     */
    json?: string | Expression<string> | PlaceholderValue;
  };
};

export type MispV1FeedCreateNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1FeedCreateParams>;
};