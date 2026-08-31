/**
 * Sendy Node - Version 1
 * Discriminator: resource=subscriber, operation=count
 */


interface Credentials {
  sendyApi: CredentialReference;
}

/** Count subscribers */
export type SendyV1SubscriberCountParams = {
  resource: 'subscriber';
  operation: 'count';
/**
 * The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID.
 */
    listId?: string | Expression<string> | PlaceholderValue;
};

export type SendyV1SubscriberCountNode = {
  type: 'n8n-nodes-base.sendy';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendyV1SubscriberCountParams>;
};