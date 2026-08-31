/**
 * Invoice Ninja Node - Version 1
 * Discriminator: resource=client, operation=create
 */


interface Credentials {
  invoiceNinjaApi: CredentialReference;
}

/** Create a new client */
export type InvoiceNinjaV1ClientCreateParams = {
  resource: 'client';
  operation: 'create';
/**
 * API Version
 * @default v4
 */
    apiVersion?: 'v4' | 'v5' | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Client Name
     */
    clientName?: string | Expression<string> | PlaceholderValue;
    /** ID Number
     */
    idNumber?: string | Expression<string> | PlaceholderValue;
    /** Private Notes
     */
    privateNotes?: string | Expression<string> | PlaceholderValue;
    /** VAT Number
     */
    vatNumber?: string | Expression<string> | PlaceholderValue;
    /** Work Phone
     */
    workPhone?: string | Expression<string> | PlaceholderValue;
    /** Website
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Billing Address
 * @default {}
 */
    billingAddressUi?: {
        /** Billing Address
     */
    billingAddressValue?: {
      /** Street Address
       */
      streetAddress?: string | Expression<string> | PlaceholderValue;
      /** Apt/Suite
       */
      aptSuite?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      countryCode?: string | Expression<string>;
    };
  };
/**
 * Contacts
 * @default {}
 */
    contactsUi?: {
        /** Contact
     */
    contacstValues?: Array<{
      /** First Name
       */
      firstName?: string | Expression<string> | PlaceholderValue;
      /** Last Name
       */
      lastName?: string | Expression<string> | PlaceholderValue;
      /** Email
       */
      email?: string | Expression<string> | PlaceholderValue;
      /** Phone
       */
      phone?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Shipping Address
 * @default {}
 */
    shippingAddressUi?: {
        /** Shipping Address
     */
    shippingAddressValue?: {
      /** Street Address
       */
      streetAddress?: string | Expression<string> | PlaceholderValue;
      /** Apt/Suite
       */
      aptSuite?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      countryCode?: string | Expression<string>;
    };
  };
};

export type InvoiceNinjaV1ClientCreateNode = {
  type: 'n8n-nodes-base.invoiceNinja';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<InvoiceNinjaV1ClientCreateParams>;
};