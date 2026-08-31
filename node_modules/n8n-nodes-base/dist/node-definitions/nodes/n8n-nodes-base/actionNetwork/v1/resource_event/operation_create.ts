/**
 * Action Network Node - Version 1
 * Discriminator: resource=event, operation=create
 */


interface Credentials {
  actionNetworkApi: CredentialReference;
}

export type ActionNetworkV1EventCreateParams = {
  resource: 'event';
  operation: 'create';
/**
 * Source where the event originated
 */
    originSystem?: string | Expression<string> | PlaceholderValue;
/**
 * Title of the event to create
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** URL to this event’s page on the Action Network or a third party
     */
    browser_url?: string | Expression<string> | PlaceholderValue;
    /** Description of the event. HTML supported.
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** End date and time of the event
     */
    end_date?: string | Expression<string>;
    /** URL to this event’s featured image on the Action Network
     */
    featured_image_url?: string | Expression<string> | PlaceholderValue;
    /** Event's instructions for activists, visible after they RSVP. HTML supported.
     */
    instructions?: string | Expression<string> | PlaceholderValue;
    /** Location
     * @default {}
     */
    location?: {
        /** Postal Addresses Fields
     */
    postal_addresses_fields?: {
      /** Whether this is the person's primary address
       * @default false
       */
      primary?: boolean | Expression<boolean>;
      /** Line for a person's address
       */
      address_lines?: string | Expression<string> | PlaceholderValue;
      /** City or other local administrative area. If blank, this will be filled in based on Action Network's geocoding.
       */
      locality?: string | Expression<string> | PlaceholderValue;
      /** State or subdivision code per ISO 3166-2
       */
      region?: string | Expression<string> | PlaceholderValue;
      /** Region specific postal code, such as ZIP code
       */
      postal_code?: string | Expression<string> | PlaceholderValue;
      /** Country code according to ISO 3166-1 Alpha-2. Defaults to US.
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** Language in which the address is recorded, per ISO 639
       */
      language?: string | Expression<string> | PlaceholderValue;
      /** Location
       * @default {}
       */
      location?: {
        /** Location Fields
     */
    location_fields?: {
      /** Latitude of the location of the address
       */
      latitude?: string | Expression<string> | PlaceholderValue;
      /** Longitude of the location of the address
       */
      longitude?: string | Expression<string> | PlaceholderValue;
    };
  };
    };
  };
    /** Internal (not public) title of the event
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Start date and time of the event
     */
    start_date?: string | Expression<string>;
  };
};

export type ActionNetworkV1EventCreateNode = {
  type: 'n8n-nodes-base.actionNetwork';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActionNetworkV1EventCreateParams>;
};