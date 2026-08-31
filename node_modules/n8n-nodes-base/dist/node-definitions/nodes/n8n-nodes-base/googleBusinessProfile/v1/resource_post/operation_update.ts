/**
 * Google Business Profile Node - Version 1
 * Discriminator: resource=post, operation=update
 */


interface Credentials {
  googleBusinessProfileOAuth2Api: CredentialReference;
}

/** Update an existing post */
export type GoogleBusinessProfileV1PostUpdateParams = {
  resource: 'post';
  operation: 'update';
/**
 * The Google Business Profile account
 * @default {"mode":"list","value":""}
 */
    account?: { __rl: true; mode: 'list' | 'name'; value: string; cachedResultName?: string };
/**
 * The specific location or business associated with the account
 * @default {"mode":"list","value":""}
 */
    location?: { __rl: true; mode: 'list' | 'name'; value: string; cachedResultName?: string };
/**
 * Select the post to retrieve its details
 * @default {"mode":"list","value":""}
 */
    post?: { __rl: true; mode: 'list' | 'name'; value: string; cachedResultName?: string };
/**
 * Options
 * @default {}
 */
    additionalOptions?: {
    /** The main text of the post
     */
    summary?: string | Expression<string> | PlaceholderValue;
    /** The language code of the post content. &lt;a href="https://cloud.google.com/translate/docs/languages" target="_blank"&gt;More info&lt;/a&gt;.
     */
    languageCode?: string | Expression<string> | PlaceholderValue;
    /** The type of call to action
     * @default ACTION_TYPE_UNSPECIFIED
     */
    callToActionType?: 'ACTION_TYPE_UNSPECIFIED' | 'BOOK' | 'GET_OFFER' | 'LEARN_MORE' | 'ORDER' | 'SHOP' | 'SIGN_UP' | Expression<string>;
    /** The URL that users are sent to when clicking through the promotion
     */
    url?: string | Expression<string> | PlaceholderValue;
    /** The start date and time of the event
     */
    startDateTime?: string | Expression<string>;
    /** The end date and time of the event
     */
    endDateTime?: string | Expression<string>;
    /** E.g. 20% off in store or online.
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** The start date of the offer
     */
    startDate?: string | Expression<string> | PlaceholderValue;
    /** The end date of the offer
     */
    endDate?: string | Expression<string> | PlaceholderValue;
    /** The coupon code for the offer
     */
    couponCode?: string | Expression<string> | PlaceholderValue;
    /** Link to redeem the offer
     */
    redeemOnlineUrl?: string | Expression<string> | PlaceholderValue;
    /** The terms and conditions of the offer
     */
    termsConditions?: string | Expression<string> | PlaceholderValue;
  };
  requestOptions?: {
    /** Batching
     * @default {"batch":{}}
     */
    batching?: {
        /** Batching
     */
    batch?: {
      /** Input will be split in batches to throttle requests. -1 for disabled. 0 will be treated as 1.
       * @default 50
       */
      batchSize?: number | Expression<number>;
      /** Time (in milliseconds) between each batch of requests. 0 for disabled.
       * @default 1000
       */
      batchInterval?: number | Expression<number>;
    };
  };
    /** Whether to accept the response even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean;
    /** HTTP proxy to use. If authentication is required it can be defined as follow: http://username:password@myproxy:3128
     */
    proxy?: string | Expression<string> | PlaceholderValue;
    /** Time in ms to wait for the server to send response headers (and start the response body) before aborting the request
     * @default 10000
     */
    timeout?: number | Expression<number>;
  };
};

export type GoogleBusinessProfileV1PostUpdateNode = {
  type: 'n8n-nodes-base.googleBusinessProfile';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleBusinessProfileV1PostUpdateParams>;
};