/**
 * Bitly Node - Version 1
 * Discriminator: resource=link, operation=update
 */


interface Credentials {
  bitlyApi: CredentialReference;
  bitlyOAuth2Api: CredentialReference;
}

/** Update a link */
export type BitlyV1LinkUpdateParams = {
  resource: 'link';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Bitlink
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Archived
     * @default false
     */
    archived?: boolean | Expression<boolean>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    group?: string | Expression<string>;
    /** Long URL
     */
    longUrl?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    tags?: string[];
    /** Title
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Deeplinks
 * @default {}
 */
    deeplink?: {
        /** Deep Link
     */
    deeplinkUi?: Array<{
      /** App ID
       */
      appId?: string | Expression<string> | PlaceholderValue;
      /** App URI Path
       */
      appUriPath?: string | Expression<string> | PlaceholderValue;
      /** Install Type
       */
      installType?: string | Expression<string> | PlaceholderValue;
      /** Install URL
       */
      installUrl?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type BitlyV1LinkUpdateNode = {
  type: 'n8n-nodes-base.bitly';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitlyV1LinkUpdateParams>;
};