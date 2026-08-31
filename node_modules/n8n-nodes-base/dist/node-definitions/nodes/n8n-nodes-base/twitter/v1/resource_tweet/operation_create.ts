/**
 * X (Formerly Twitter) Node - Version 1
 * Discriminator: resource=tweet, operation=create
 */


interface Credentials {
  twitterOAuth1Api: CredentialReference;
}

/** Create a direct message */
export type TwitterV1TweetCreateParams = {
  resource: 'tweet';
  operation: 'create';
/**
 * The text of the status update. URL encode as necessary. t.co link wrapping will affect character counts.
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Name of the binary properties which contain data which should be added to tweet as attachment. Multiple ones can be comma-separated.
     * @default data
     */
    attachments?: string | Expression<string> | PlaceholderValue;
    /** Whether or not to put a pin on the exact coordinates a Tweet has been sent from
     * @default false
     */
    displayCoordinates?: boolean | Expression<boolean>;
    /** The ID of an existing status that the update is in reply to
     */
    inReplyToStatusId?: string | Expression<string> | PlaceholderValue;
    /** Subscriber location information.n
     * @default {}
     */
    locationFieldsUi?: {
        /** Location
     */
    locationFieldsValues?: {
      /** The location latitude
       */
      latitude?: string | Expression<string> | PlaceholderValue;
      /** The location longitude
       */
      longitude?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Whether you are uploading Tweet media that might be considered sensitive content such as nudity, or medical procedures
     * @default false
     */
    possiblySensitive?: boolean | Expression<boolean>;
  };
};

export type TwitterV1TweetCreateNode = {
  type: 'n8n-nodes-base.twitter';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TwitterV1TweetCreateParams>;
};