/**
 * Sendy Node - Version 1
 * Discriminator: resource=subscriber, operation=status
 */


interface Credentials {
  sendyApi: CredentialReference;
}

/** Get the status of subscriber */
export type SendyV1SubscriberStatusParams = {
  resource: 'subscriber';
  operation: 'status';
/**
 * Email address of the subscriber
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * The list ID you want to subscribe a user to. This encrypted & hashed ID can be found under View all lists section named ID.
 */
    listId?: string | Expression<string> | PlaceholderValue;
};

export type SendyV1SubscriberStatusNode = {
  type: 'n8n-nodes-base.sendy';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendyV1SubscriberStatusParams>;
};