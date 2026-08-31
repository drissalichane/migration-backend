/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=vendor, operation=update
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Update an account */
export type ZohoCrmV1VendorUpdateParams = {
  resource: 'vendor';
  operation: 'update';
/**
 * ID of the vendor to update
 */
    vendorId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Address
     * @default {}
     */
    Address?: {
        /** Address Fields
     */
    address_fields?: {
      /** Street
       */
      Street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      City?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      State?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      Country?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      Zip_Code?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Category
     */
    Category?: string | Expression<string> | PlaceholderValue;
    /** Currency
     */
    Currency?: string | Expression<string> | PlaceholderValue;
    /** Filter by custom fields
     * @default {}
     */
    customFields?: {
        /** Custom Field
     */
    customFields?: Array<{
      /** Custom field to set a value to
       */
      fieldId?: string | Expression<string>;
      /** Value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Description
     */
    Description?: string | Expression<string> | PlaceholderValue;
    /** Email
     */
    Email?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    Phone?: string | Expression<string> | PlaceholderValue;
    /** Vendor Name
     */
    Vendor_Name?: string | Expression<string> | PlaceholderValue;
    /** Website
     */
    Website?: string | Expression<string> | PlaceholderValue;
  };
};

export type ZohoCrmV1VendorUpdateNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1VendorUpdateParams>;
};