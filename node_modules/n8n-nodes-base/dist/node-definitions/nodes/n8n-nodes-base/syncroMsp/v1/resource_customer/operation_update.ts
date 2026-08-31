/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=customer, operation=update
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Update customer */
export type SyncroMspV1CustomerUpdateParams = {
  resource: 'customer';
  operation: 'update';
/**
 * Customer ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Address
     * @default {}
     */
    address?: {
        /** Address Fields
     */
    addressFields?: {
      /** Line 1
       */
      address?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      address2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** ZIP
       */
      zip?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Business Name
     */
    businessName?: string | Expression<string> | PlaceholderValue;
    /** Email
     */
    email?: string | Expression<string> | PlaceholderValue;
    /** First Name
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Get SMS
     * @default true
     */
    getSms?: boolean | Expression<boolean>;
    /** Invoice Emails
     */
    invoiceCcEmails?: string | Expression<string> | PlaceholderValue;
    /** Last Name
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** No Email
     * @default false
     */
    noEmail?: boolean | Expression<boolean>;
    /** Notes
     */
    notes?: string | Expression<string> | PlaceholderValue;
    /** Notification Email
     * @displayOptions.show { noEmail: [false] }
     */
    notificationEmail?: string | Expression<string> | PlaceholderValue;
    /** Phone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Source from which customer is referred to the platform like Linkedin, Google, Customer name etc
     */
    referredBy?: string | Expression<string> | PlaceholderValue;
  };
};

export type SyncroMspV1CustomerUpdateNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1CustomerUpdateParams>;
};