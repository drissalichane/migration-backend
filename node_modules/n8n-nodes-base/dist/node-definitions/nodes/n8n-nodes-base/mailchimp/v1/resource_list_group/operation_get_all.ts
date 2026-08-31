/**
 * Mailchimp Node - Version 1
 * Discriminator: resource=listGroup, operation=getAll
 */


interface Credentials {
  mailchimpApi: CredentialReference;
  mailchimpOAuth2Api: CredentialReference;
}

/** Get many members on a list */
export type MailchimpV1ListGroupGetAllParams = {
  resource: 'listGroup';
  operation: 'getAll';
  authentication?: 'apiKey' | 'oAuth2' | Expression<string>;
/**
 * List of lists. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    list?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    groupCategory?: string | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 500
 */
    limit?: number | Expression<number>;
};

export type MailchimpV1ListGroupGetAllNode = {
  type: 'n8n-nodes-base.mailchimp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MailchimpV1ListGroupGetAllParams>;
};