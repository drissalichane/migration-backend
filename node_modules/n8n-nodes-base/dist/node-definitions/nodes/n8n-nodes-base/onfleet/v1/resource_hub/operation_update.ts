/**
 * Onfleet Node - Version 1
 * Discriminator: resource=hub, operation=update
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Update an Onfleet admin */
export type OnfleetV1HubUpdateParams = {
  resource: 'hub';
  operation: 'update';
/**
 * The ID of the hub object for lookup
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Destination
     * @default {}
     */
    destination?: {
        /** Destination Properties
     */
    destinationProperties?: {
      /** Whether or not the address is specified in a single unparsed string
       * @default false
       */
      unparsed?: boolean | Expression<boolean>;
      /** The destination's street address details
       * @displayOptions.show { unparsed: [true] }
       */
      address?: string | Expression<string> | PlaceholderValue;
      /** The number component of this address, it may also contain letters
       * @displayOptions.show { unparsed: [false] }
       */
      addressNumber?: string | Expression<string> | PlaceholderValue;
      /** The name of the street
       * @displayOptions.show { unparsed: [false] }
       */
      addressStreet?: string | Expression<string> | PlaceholderValue;
      /** The name of the municipality
       * @displayOptions.show { unparsed: [false] }
       */
      addressCity?: string | Expression<string> | PlaceholderValue;
      /** State
       * @displayOptions.show { unparsed: [false] }
       */
      addressState?: string | Expression<string> | PlaceholderValue;
      /** The name of the country
       * @displayOptions.show { unparsed: [false] }
       */
      addressCountry?: string | Expression<string> | PlaceholderValue;
      /** The postal or zip code
       * @displayOptions.show { unparsed: [false] }
       */
      addressPostalCode?: string | Expression<string> | PlaceholderValue;
      /** A name associated with this address
       */
      addressName?: string | Expression<string> | PlaceholderValue;
      /** The suite or apartment number, or any additional relevant information
       */
      addressApartment?: string | Expression<string> | PlaceholderValue;
      /** Notes about the destination
       */
      addressNotes?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** A name to identify the hub
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** These are the teams that this Hub will be assigned to. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    teams?: string[];
  };
};

export type OnfleetV1HubUpdateNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1HubUpdateParams>;
};