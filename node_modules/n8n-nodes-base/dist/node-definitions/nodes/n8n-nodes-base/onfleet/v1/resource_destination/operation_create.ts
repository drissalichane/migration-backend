/**
 * Onfleet Node - Version 1
 * Discriminator: resource=destination, operation=create
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Create a new Onfleet admin */
export type OnfleetV1DestinationCreateParams = {
  resource: 'destination';
  operation: 'create';
/**
 * The ID of the destination object for lookup
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether or not the address is specified in a single unparsed string
 * @default false
 */
    unparsed?: boolean | Expression<boolean>;
/**
 * The destination's street address details
 * @displayOptions.show { unparsed: [true] }
 */
    address?: string | Expression<string> | PlaceholderValue;
/**
 * The number component of this address, it may also contain letters
 * @displayOptions.show { unparsed: [false] }
 */
    addressNumber?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the street
 * @displayOptions.show { unparsed: [false] }
 */
    addressStreet?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the municipality
 * @displayOptions.show { unparsed: [false] }
 */
    addressCity?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the country
 * @displayOptions.show { unparsed: [false] }
 */
    addressCountry?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @displayOptions.show { unparsed: [true] }
 * @default {}
 */
    additionalFields?: {
    /** The suite or apartment number, or any additional relevant information
     */
    addressApartment?: string | Expression<string> | PlaceholderValue;
    /** A name associated with this address
     */
    addressName?: string | Expression<string> | PlaceholderValue;
    /** Notes about the destination
     */
    addressNotes?: string | Expression<string> | PlaceholderValue;
  };
};

export type OnfleetV1DestinationCreateNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1DestinationCreateParams>;
};