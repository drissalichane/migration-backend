/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=contact, operation=update
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Update a calendar */
export type MicrosoftOutlookV2ContactUpdateParams = {
  resource: 'contact';
  operation: 'update';
/**
 * Contact
 * @default {"mode":"list","value":""}
 */
    contactId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Update Fields
 * @default {}
 */
    additionalFields?: {
    /** The name of the contact's assistant
     */
    assistantName?: string | Expression<string> | PlaceholderValue;
    /** Birthday
     */
    birthday?: string | Expression<string>;
    /** Business Address
     * @default {"values":{"sity":"","street":"","postalCode":"","countryOrRegion":"","state":""}}
     */
    businessAddress?: {
        /** Address
     */
    values?: {
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Country/Region
       */
      countryOrRegion?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Street
       */
      street?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Business Home Page
     */
    businessHomePage?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of business phone numbers
     */
    businessPhones?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of categories associated with the contact
     */
    categories?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of names of the contact's children
     */
    children?: string | Expression<string> | PlaceholderValue;
    /** Company Name
     */
    companyName?: string | Expression<string> | PlaceholderValue;
    /** Department
     */
    department?: string | Expression<string> | PlaceholderValue;
    /** Display Name
     */
    displayName?: string | Expression<string> | PlaceholderValue;
    /** Email Address
     * @default {}
     */
    emailAddresses?: {
        /** Email
     */
    values?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Address
       */
      address?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The name the contact is filed under
     */
    fileAs?: string | Expression<string> | PlaceholderValue;
    /** Home Address
     * @default {"values":{"sity":"","street":"","postalCode":"","countryOrRegion":"","state":""}}
     */
    homeAddress?: {
        /** Address
     */
    values?: {
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Country/Region
       */
      countryOrRegion?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Street
       */
      street?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Home Phones
     * @hint Multiple phones can be added separated by ,
     */
    homePhones?: string | Expression<string> | PlaceholderValue;
    /** The contact's instant messaging (IM) addresses
     * @hint Multiple addresses can be added separated by ,
     */
    imAddresses?: string | Expression<string> | PlaceholderValue;
    /** Initials
     */
    initials?: string | Expression<string> | PlaceholderValue;
    /** Job Title
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
    /** The name of the contact's manager
     */
    manager?: string | Expression<string> | PlaceholderValue;
    /** Middle Name
     */
    middleName?: string | Expression<string> | PlaceholderValue;
    /** Mobile Phone
     */
    mobilePhone?: string | Expression<string> | PlaceholderValue;
    /** Name
     */
    givenName?: string | Expression<string> | PlaceholderValue;
    /** Nickname
     */
    nickName?: string | Expression<string> | PlaceholderValue;
    /** Office Location
     */
    officeLocation?: string | Expression<string> | PlaceholderValue;
    /** Other Address
     * @default {"values":{"sity":"","street":"","postalCode":"","countryOrRegion":"","state":""}}
     */
    otherAddress?: {
        /** Address
     */
    values?: {
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Country/Region
       */
      countryOrRegion?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Street
       */
      street?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Personal Notes
     */
    personalNotes?: string | Expression<string> | PlaceholderValue;
    /** Profession
     */
    profession?: string | Expression<string> | PlaceholderValue;
    /** Spouse Name
     */
    spouseName?: string | Expression<string> | PlaceholderValue;
    /** Surname
     */
    surname?: string | Expression<string> | PlaceholderValue;
    /** Title
     */
    title?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV2ContactUpdateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2ContactUpdateParams>;
};