/**
 * Google Contacts Node - Version 1
 * Discriminator: resource=contact, operation=create
 */


interface Credentials {
  googleContactsOAuth2Api: CredentialReference;
}

/** Create a contact */
export type GoogleContactsV1ContactCreateParams = {
  resource: 'contact';
  operation: 'create';
/**
 * Family Name
 */
    familyName?: string | Expression<string> | PlaceholderValue;
/**
 * Given Name
 */
    givenName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Addresses
     * @default {}
     */
    addressesUi?: {
        /** Address
     */
    addressesValues?: {
      /** Street Address
       */
      streetAddress?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** Region
       */
      region?: string | Expression<string> | PlaceholderValue;
      /** Country Code
       */
      countryCode?: string | Expression<string> | PlaceholderValue;
      /** Postal Code
       */
      postalCode?: string | Expression<string> | PlaceholderValue;
      /** Type
       */
      type?: 'home' | 'work' | 'other' | Expression<string>;
    };
  };
    /** Birthday
     */
    birthday?: string | Expression<string>;
    /** Company
     * @default {}
     */
    companyUi?: {
        /** Company
     */
    companyValues?: Array<{
      /** Current
       * @default false
       */
      current?: boolean | Expression<boolean>;
      /** Domain
       */
      domain?: string | Expression<string> | PlaceholderValue;
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Title
       */
      title?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Custom Fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** The end user specified key of the user defined data
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** The end user specified value of the user defined data
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Emails
     * @default {}
     */
    emailsUi?: {
        /** Email
     */
    emailsValues?: Array<{
      /** The type of the email address. The type can be custom or one of these predefined values.
       */
      type?: 'home' | 'work' | 'other' | Expression<string>;
      /** The email address
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** An event related to the person
     * @default {}
     */
    eventsUi?: {
        /** Event
     */
    eventsValues?: Array<{
      /** The date of the event
       */
      date?: string | Expression<string>;
      /** The type of the event. The type can be custom or one of these predefined values.
       */
      type?: 'anniversary' | 'other' | Expression<string>;
    }>;
  };
    /** The name that should be used to sort the person in a list
     */
    fileAs?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    group?: string[];
    /** Honorific Prefix
     */
    honorificPrefix?: string | Expression<string> | PlaceholderValue;
    /** Honorific Suffix
     */
    honorificSuffix?: string | Expression<string> | PlaceholderValue;
    /** Middle Name
     */
    middleName?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    biographies?: string | Expression<string> | PlaceholderValue;
    /** Phone
     * @default {}
     */
    phoneUi?: {
        /** Phone
     */
    phoneValues?: Array<{
      /** Type
       */
      type?: 'googleVoice' | 'home' | 'homeFax' | 'main' | 'mobile' | 'other' | 'otherFax' | 'pager' | 'work' | 'workFax' | 'workMobile' | 'workPager' | Expression<string>;
      /** The phone number
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Relations
     * @default {}
     */
    relationsUi?: {
        /** Relation
     */
    relationsValues?: Array<{
      /** The name of the other person this relation refers to
       */
      person?: string | Expression<string> | PlaceholderValue;
      /** The person's relation to the other person. The type can be custom or one of these predefined values.
       */
      type?: 'assistant' | 'brother' | 'child' | 'domesticPartner' | 'father' | 'friend' | 'manager' | 'mother' | 'parent' | 'referredBy' | 'relative' | 'sister' | 'spouse' | Expression<string>;
    }>;
  };
  };
};

export type GoogleContactsV1ContactCreateOutput = {
  contactId?: string;
  coverPhotos?: Array<{
    'default'?: boolean;
    metadata?: {
      primary?: boolean;
      source?: {
        id?: string;
        type?: string;
      };
    };
    url?: string;
  }>;
  emailAddresses?: Array<{
    formattedType?: string;
    metadata?: {
      primary?: boolean;
      source?: {
        id?: string;
        type?: string;
      };
    };
    type?: string;
    value?: string;
  }>;
  etag?: string;
  memberships?: Array<{
    contactGroupMembership?: {
      contactGroupId?: string;
      contactGroupResourceName?: string;
    };
    metadata?: {
      source?: {
        id?: string;
        type?: string;
      };
    };
  }>;
  metadata?: {
    objectType?: string;
    sources?: Array<{
      etag?: string;
      id?: string;
      profileMetadata?: {
        objectType?: string;
        userTypes?: Array<string>;
      };
      type?: string;
      updateTime?: string;
    }>;
  };
  names?: Array<{
    displayName?: string;
    displayNameLastFirst?: string;
    familyName?: string;
    givenName?: string;
    metadata?: {
      primary?: boolean;
      source?: {
        id?: string;
        type?: string;
      };
      sourcePrimary?: boolean;
    };
    unstructuredName?: string;
  }>;
  phoneNumbers?: Array<{
    canonicalForm?: string;
    formattedType?: string;
    metadata?: {
      primary?: boolean;
      source?: {
        id?: string;
        type?: string;
      };
    };
    type?: string;
    value?: string;
  }>;
  photos?: Array<{
    'default'?: boolean;
    metadata?: {
      primary?: boolean;
      source?: {
        id?: string;
        type?: string;
      };
    };
    url?: string;
  }>;
  resourceName?: string;
};

export type GoogleContactsV1ContactCreateNode = {
  type: 'n8n-nodes-base.googleContacts';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleContactsV1ContactCreateParams>;
  output?: Items<GoogleContactsV1ContactCreateOutput>;
};