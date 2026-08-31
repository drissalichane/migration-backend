/**
 * Tapfiliate Node - Version 1
 * Discriminator: resource=affiliate, operation=create
 */


interface Credentials {
  tapfiliateApi: CredentialReference;
}

/** Create an affiliate */
export type TapfiliateV1AffiliateCreateParams = {
  resource: 'affiliate';
  operation: 'create';
/**
 * The affiliate’s email
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * The affiliate’s firstname
 */
    firstname?: string | Expression<string> | PlaceholderValue;
/**
 * The affiliate’s lastname
 */
    lastname?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
     * @default {}
     */
    addressUi?: {
        /** Address
     */
    addressValues?: {
      /** Line 1
       */
      address?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      address_two?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postal_code?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** The country’s ISO_3166-1 code. &lt;a href="https://en.wikipedia.org/wiki/ISO_3166-1"&gt;Codes&lt;/a&gt;.
       */
      country?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** The affiliate’s company data
     */
    companyName?: string | Expression<string> | PlaceholderValue;
  };
};

export type TapfiliateV1AffiliateCreateNode = {
  type: 'n8n-nodes-base.tapfiliate';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TapfiliateV1AffiliateCreateParams>;
};