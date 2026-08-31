/**
 * Magento 2 Node - Version 1
 * Discriminator: resource=customer, operation=update
 */


interface Credentials {
  magento2Api: CredentialReference;
}

/** Update a customer */
export type Magento2V1CustomerUpdateParams = {
  resource: 'customer';
  operation: 'update';
/**
 * ID of the customer to update
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * Email
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * First Name
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * Last Name
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    website_id?: string | Expression<string>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Addresses
     * @default {}
     */
    addresses?: {
        /** Address
     */
    address?: Array<{
      /** Street
       */
      street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Region
       */
      region?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postcode?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      country_id?: string | Expression<string>;
      /** Company
       */
      company?: string | Expression<string> | PlaceholderValue;
      /** Fax
       */
      fax?: string | Expression<string> | PlaceholderValue;
      /** First Name
       */
      firstname?: string | Expression<string> | PlaceholderValue;
      /** Last Name
       */
      lastname?: string | Expression<string> | PlaceholderValue;
      /** Middle Name
       */
      middlename?: string | Expression<string> | PlaceholderValue;
      /** Prefix
       */
      prefix?: string | Expression<string> | PlaceholderValue;
      /** Suffix
       */
      suffix?: string | Expression<string> | PlaceholderValue;
      /** Telephone
       */
      telephone?: string | Expression<string> | PlaceholderValue;
      /** Whether this address is default billing address
       * @default false
       */
      default_billing?: boolean | Expression<boolean>;
      /** Whether this address is default shipping address
       * @default false
       */
      default_shipping?: boolean | Expression<boolean>;
    }>;
  };
    /** Amazon ID
     */
    amazon_id?: string | Expression<string> | PlaceholderValue;
    /** Confirmation
     */
    confirmation?: string | Expression<string> | PlaceholderValue;
    /** Custom Attributes
     * @default {}
     */
    customAttributes?: {
        /** Custom Attribute
     */
    customAttribute?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      attribute_code?: string | Expression<string>;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Date of Birth
     */
    dob?: string | Expression<string>;
    /** Default Billing Address ID
     */
    default_billing?: string | Expression<string> | PlaceholderValue;
    /** Default Shipping Address ID
     */
    default_shipping?: string | Expression<string> | PlaceholderValue;
    /** Gender
     */
    gender?: 1 | 2 | 3 | Expression<number>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    group_id?: string | Expression<string>;
    /** Is Subscribed
     * @default false
     */
    is_subscribed?: boolean | Expression<boolean>;
    /** Middle Name
     */
    middlename?: string | Expression<string> | PlaceholderValue;
    /** Password
     */
    password?: string | Expression<string> | PlaceholderValue;
    /** Prefix
     */
    prefix?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    store_id?: string | Expression<string>;
    /** Suffix
     */
    suffix?: string | Expression<string> | PlaceholderValue;
    /** Vertex Customer Code
     */
    vertex_customer_code?: string | Expression<string> | PlaceholderValue;
    /** Vertex Customer Country
     */
    vertex_customer_country?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /operation: ["create"] }
     */
    website_id?: string | Expression<string>;
  };
};

export type Magento2V1CustomerUpdateNode = {
  type: 'n8n-nodes-base.magento2';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<Magento2V1CustomerUpdateParams>;
};