/**
 * Webflow Node - Version 2
 * Discriminator: resource=item, operation=deleteItem
 */


interface Credentials {
  webflowOAuth2Api: CredentialReference;
}

export type WebflowV2ItemDeleteItemParams = {
  resource: 'item';
  operation: 'deleteItem';
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

export type WebflowV2ItemDeleteItemOutput = {
  success?: boolean;
};

export type WebflowV2ItemDeleteItemNode = {
  type: 'n8n-nodes-base.webflow';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<WebflowV2ItemDeleteItemParams>;
  output?: Items<WebflowV2ItemDeleteItemOutput>;
};