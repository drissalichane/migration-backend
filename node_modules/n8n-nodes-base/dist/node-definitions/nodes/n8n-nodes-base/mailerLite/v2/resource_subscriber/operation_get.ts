/**
 * MailerLite Node - Version 2
 * Discriminator: resource=subscriber, operation=get
 */


interface Credentials {
  mailerLiteApi: CredentialReference;
}

/** Get an subscriber */
export type MailerLiteV2SubscriberGetParams = {
  resource: 'subscriber';
  operation: 'get';
/**
 * Email of subscriber to get
 */
    subscriberId?: string | Expression<string> | PlaceholderValue;
};

export type MailerLiteV2SubscriberGetNode = {
  type: 'n8n-nodes-base.mailerLite';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MailerLiteV2SubscriberGetParams>;
};