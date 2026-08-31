/**
 * Bitly Node - Version 1
 * Discriminator: resource=link, operation=create
 */


interface Credentials {
  bitlyApi: CredentialReference;
  bitlyOAuth2Api: CredentialReference;
}

/** Create a link */
export type BitlyV1LinkCreateParams = {
  resource: 'link';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Long URL
 */
    longUrl?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Domain
     * @default bit.ly
     */
    domain?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    group?: string | Expression<string>;
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

export type BitlyV1LinkCreateOutput = {
  archived?: boolean;
  created_at?: string;
  id?: string;
  link?: string;
  long_url?: string;
  references?: {
    group?: string;
  };
  tags?: Array<string>;
};

export type BitlyV1LinkCreateNode = {
  type: 'n8n-nodes-base.bitly';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BitlyV1LinkCreateParams>;
  output?: Items<BitlyV1LinkCreateOutput>;
};