/**
 * Iterable Node - Version 1
 * Discriminator: resource=event, operation=track
 */


interface Credentials {
  iterableApi: CredentialReference;
}

/** Record the actions a user perform */
export type IterableV1EventTrackParams = {
  resource: 'event';
  operation: 'track';
/**
 * The name of the event to track
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Campaign tied to conversion
     */
    campaignId?: string | Expression<string> | PlaceholderValue;
    /** Time event happened
     */
    createdAt?: string | Expression<string>;
    /** Data Fields
     * @default {}
     */
    dataFieldsUi?: {
        /** Data Field
     */
    dataFieldValues?: Array<{
      /** The end event specified key of the event defined data
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** The end event specified value of the event defined data
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Either email or userId must be passed in to identify the user. If both are passed in, email takes precedence.
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Optional event ID. If an event exists with that ID, the event will be updated. If none is specified, a new ID will automatically be generated and returned.
     */
    id?: string | Expression<string> | PlaceholderValue;
    /** Template ID
     */
    templateId?: string | Expression<string> | PlaceholderValue;
    /** userId that was passed into the updateUser call
     */
    userId?: string | Expression<string> | PlaceholderValue;
  };
};

export type IterableV1EventTrackNode = {
  type: 'n8n-nodes-base.iterable';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IterableV1EventTrackParams>;
};