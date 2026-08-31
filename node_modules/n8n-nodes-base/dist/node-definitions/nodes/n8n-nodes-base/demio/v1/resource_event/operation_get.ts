/**
 * Demio Node - Version 1
 * Discriminator: resource=event, operation=get
 */


interface Credentials {
  demioApi: CredentialReference;
}

/** Get an event */
export type DemioV1EventGetParams = {
  resource: 'event';
  operation: 'get';
/**
 * Event ID
 */
    eventId?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Whether to return only active dates in series
     * @default false
     */
    active?: boolean | Expression<boolean>;
    /** Event Date ID
     */
    date_id?: string | Expression<string> | PlaceholderValue;
  };
};

export type DemioV1EventGetNode = {
  type: 'n8n-nodes-base.demio';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<DemioV1EventGetParams>;
};