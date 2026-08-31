/**
 * Webflow Node - Version 1
 * Discriminator: resource=item, operation=create
 */


interface Credentials {
  webflowApi: CredentialReference;
  webflowOAuth2Api: CredentialReference;
}

export type WebflowV1ItemCreateParams = {
  resource: 'item';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * ID of the site containing the collection whose items to add to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    siteId?: string | Expression<string>;
/**
 * ID of the collection to add an item to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    collectionId?: string | Expression<string>;
/**
 * Whether the item should be published on the live site
 * @default false
 */
    live?: boolean | Expression<boolean>;
/**
 * Fields
 * @default {}
 */
    fieldsUi?: {
        /** Field
     */
    fieldValues?: Array<{
      /** Field to set for the item to create. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** Value to set for the item to create
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type WebflowV1ItemCreateNode = {
  type: 'n8n-nodes-base.webflow';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WebflowV1ItemCreateParams>;
};