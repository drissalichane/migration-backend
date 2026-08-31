/**
 * Odoo Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  odooApi: CredentialReference;
}

/** Create a new item */
export type OdooV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
/**
 * Name
 */
    contactName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
     * @default {}
     */
    address?: {
        /** Address
     */
    value?: {
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      country_id?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      state_id?: string | Expression<string>;
      /** Street
       */
      street?: string | Expression<string> | PlaceholderValue;
      /** Street 2
       */
      street2?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zip?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** Internal Notes
     */
    comment?: string | Expression<string> | PlaceholderValue;
    /** Job Position
     */
    'function'?: string | Expression<string> | PlaceholderValue;
    /** Mobile
     */
    mobile?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Tax ID
     */
    vat?: string | Expression<string> | PlaceholderValue;
    /** Website
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
};

export type OdooV1ContactCreateOutput = {
  id?: number;
};

export type OdooV1ContactCreateNode = {
  type: 'n8n-nodes-base.odoo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OdooV1ContactCreateParams>;
  output?: Items<OdooV1ContactCreateOutput>;
};