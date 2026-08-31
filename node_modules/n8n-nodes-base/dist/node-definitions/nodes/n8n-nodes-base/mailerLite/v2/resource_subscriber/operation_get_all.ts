/**
 * MailerLite Node - Version 2
 * Discriminator: resource=subscriber, operation=getAll
 */


interface Credentials {
  mailerLiteApi: CredentialReference;
}

/** Get many subscribers */
export type MailerLiteV2SubscriberGetAllParams = {
  resource: 'subscriber';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Status
     */
    status?: 'active' | 'bounced' | 'junk' | 'unconfirmed' | 'unsubscribed' | Expression<string>;
  };
};

export type MailerLiteV2SubscriberGetAllNode = {
  type: 'n8n-nodes-base.mailerLite';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MailerLiteV2SubscriberGetAllParams>;
};