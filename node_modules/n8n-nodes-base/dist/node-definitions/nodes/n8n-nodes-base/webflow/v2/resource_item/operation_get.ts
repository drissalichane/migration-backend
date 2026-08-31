/**
 * Webflow Node - Version 2
 * Discriminator: resource=item, operation=get
 */


interface Credentials {
  webflowOAuth2Api: CredentialReference;
}

export type WebflowV2ItemGetParams = {
  resource: 'item';
  operation: 'get';
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

export type WebflowV2ItemGetOutput = {
  createdOn?: string;
  fieldData?: {
    name?: string;
    slug?: string;
  };
  id?: string;
  isArchived?: boolean;
  lastUpdated?: string;
};

export type WebflowV2ItemGetNode = {
  type: 'n8n-nodes-base.webflow';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<WebflowV2ItemGetParams>;
  output?: Items<WebflowV2ItemGetOutput>;
};