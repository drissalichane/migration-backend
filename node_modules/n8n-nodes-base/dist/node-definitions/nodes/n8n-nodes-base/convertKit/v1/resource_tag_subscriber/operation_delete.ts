/**
 * ConvertKit Node - Version 1
 * Discriminator: resource=tagSubscriber, operation=delete
 */


interface Credentials {
  convertKitApi: CredentialReference;
}

/** Delete a field */
export type ConvertKitV1TagSubscriberDeleteParams = {
  resource: 'tagSubscriber';
  operation: 'delete';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    tagId?: string | Expression<string>;
/**
 * Subscriber email address
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type ConvertKitV1TagSubscriberDeleteNode = {
  type: 'n8n-nodes-base.convertKit';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ConvertKitV1TagSubscriberDeleteParams>;
};