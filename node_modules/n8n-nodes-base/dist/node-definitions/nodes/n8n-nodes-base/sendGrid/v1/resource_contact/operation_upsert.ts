/**
 * SendGrid Node - Version 1
 * Discriminator: resource=contact, operation=upsert
 */


interface Credentials {
  sendGridApi: CredentialReference;
}

/** Create a new contact, or update the current one if it already exists (upsert) */
export type SendGridV1ContactUpsertParams = {
  resource: 'contact';
  operation: 'upsert';
/**
 * Primary email for the contact
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
     * @default {}
     */
    addressUi?: {
        /** Address
     */
    addressValues?: {
      /** Address Line 1
       */
      address1?: string | Expression<string> | PlaceholderValue;
      /** Address Line 2
       */
      address2?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Alternate Emails
     */
    alternateEmails?: string | Expression<string> | PlaceholderValue;
    /** City
     */
    city?: string | Expression<string> | PlaceholderValue;
    /** Country
     */
    country?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** Postal Code
     */
    postalCode?: string | Expression<string> | PlaceholderValue;
    /** State/Province/Region
     */
    stateProvinceRegion?: string | Expression<string> | PlaceholderValue;
    /** Adds a custom field to set also values which have not been predefined
     * @default {}
     */
    listIdsUi?: {
        /** List IDs
     */
    listIdValues?: {
      /** ID of the field to set. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @default []
       */
      listIds?: string[];
    };
  };
    /** Adds custom fields
     * @default {}
     */
    customFieldsUi?: {
        /** Field
     */
    customFieldValues?: Array<{
      /** ID of the field. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** Value for the field
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type SendGridV1ContactUpsertNode = {
  type: 'n8n-nodes-base.sendGrid';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SendGridV1ContactUpsertParams>;
};