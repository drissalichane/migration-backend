/**
 * Webflow Node - Version 1
 * Discriminator: resource=item, operation=delete
 */


interface Credentials {
  webflowApi: CredentialReference;
  webflowOAuth2Api: CredentialReference;
}

export type WebflowV1ItemDeleteParams = {
  resource: 'item';
  operation: 'delete';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * ID of the site containing the collection whose items to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    siteId?: string | Expression<string>;
/**
 * ID of the collection whose items to operate on. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    collectionId?: string | Expression<string>;
/**
 * ID of the item to operate on
 */
    itemId?: string | Expression<string> | PlaceholderValue;
};

export type WebflowV1ItemDeleteNode = {
  type: 'n8n-nodes-base.webflow';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WebflowV1ItemDeleteParams>;
};