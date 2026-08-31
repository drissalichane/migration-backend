/**
 * Help Scout Node - Version 1
 * Discriminator: resource=customer, operation=create
 */


interface Credentials {
  helpScoutOAuth2Api: CredentialReference;
}

/** Create a new conversation */
export type HelpScoutV1CustomerCreateParams = {
  resource: 'customer';
  operation: 'create';
/**
 * By default the response only contain the ID to resource. If this option gets activated, it will resolve the data automatically.
 * @default true
 */
    resolveData?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Customer’s age
     * @default 1
     */
    age?: number | Expression<number>;
    /** First name of the customer. When defined it must be between 1 and 40 characters.
     */
    firstName?: string | Expression<string> | PlaceholderValue;
    /** Gender of this customer
     */
    gender?: 'female' | 'male' | 'unknown' | Expression<string>;
    /** Job title. Max length 60 characters.
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
    /** Last name of the customer
     */
    lastName?: string | Expression<string> | PlaceholderValue;
    /** Location of the customer
     */
    location?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    background?: string | Expression<string> | PlaceholderValue;
    /** Organization
     */
    organization?: string | Expression<string> | PlaceholderValue;
    /** URL of the customer’s photo
     */
    photoUrl?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Address
 * @default {}
 */
    addressUi?: {
        /** Address
     */
    addressValue?: {
      /** Line 1
       */
      line1?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      line2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      country?: string | Expression<string>;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Chat Handles
 * @default {}
 */
    chatsUi?: {
        /** Chat Handle
     */
    chatsValues?: Array<{
      /** Chat type
       */
      type?: 'aim' | 'gtalk' | 'icq' | 'msn' | 'other' | 'qq' | 'skype' | 'xmpp' | 'yahoo' | Expression<string>;
      /** Chat handle
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Emails
 * @default {}
 */
    emailsUi?: {
        /** Email
     */
    emailsValues?: Array<{
      /** Location for this email address
       */
      type?: 'home' | 'other' | 'work' | Expression<string>;
      /** Email
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Phones
 * @default {}
 */
    phonesUi?: {
        /** Email
     */
    phonesValues?: Array<{
      /** Location for this phone
       */
      type?: 'fax' | 'home' | 'other' | 'pager' | 'work' | Expression<string>;
      /** Phone
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Social Profiles
 * @default {}
 */
    socialProfilesUi?: {
        /** Social Profile
     */
    socialProfilesValues?: Array<{
      /** Type of social profile
       */
      type?: 'aboutMe' | 'facebook' | 'flickr' | 'forsquare' | 'google' | 'googleplus' | 'linkedin' | 'other' | 'quora' | 'tungleme' | 'twitter' | 'youtube' | Expression<string>;
      /** Social Profile handle (URL for example)
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Websites
 * @default {}
 */
    websitesUi?: {
        /** Website
     */
    websitesValues?: Array<{
      /** Website URL
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type HelpScoutV1CustomerCreateNode = {
  type: 'n8n-nodes-base.helpScout';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HelpScoutV1CustomerCreateParams>;
};