/**
 * GoToWebinar Node - Version 1
 * Discriminator: resource=registrant, operation=create
 */


interface Credentials {
  goToWebinarOAuth2Api: CredentialReference;
}

export type GoToWebinarV1RegistrantCreateParams = {
  resource: 'registrant';
  operation: 'create';
/**
 * Key of the webinar of the registrant to create. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    webinarKey?: string | Expression<string>;
/**
 * First name of the registrant to create
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * Last name of the registrant to create
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Email address of the registrant to create
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Full address of the registrant to create
     * @default {}
     */
    fullAddress?: {
        /** Details
     */
    details?: {
      /** Address
       */
      address?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Zip Code
       */
      zipCode?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** The type of industry the registrant's organization belongs to
     */
    industry?: string | Expression<string> | PlaceholderValue;
    /** Job Title
     */
    jobTitle?: string | Expression<string> | PlaceholderValue;
    /** Set the answers to all questions
     * @default {}
     */
    multiChoiceResponses?: {
        /** Details
     */
    details?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      questionKey?: string | Expression<string>;
      /** Answer ID of the question
       */
      AnswerKey?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The size in employees of the registrant's organization
     */
    numberOfEmployees?: string | Expression<string> | PlaceholderValue;
    /** Organization
     */
    organization?: string | Expression<string> | PlaceholderValue;
    /** Telephone
     */
    phone?: string | Expression<string> | PlaceholderValue;
    /** Registrant's role in purchasing the product
     */
    purchasingRole?: string | Expression<string> | PlaceholderValue;
    /** Time frame within which the product will be purchased
     */
    purchasingTimeFrame?: string | Expression<string> | PlaceholderValue;
    /** Questions or comments made by the registrant during registration
     */
    questionsAndComments?: string | Expression<string> | PlaceholderValue;
    /** Resend Confirmation
     * @default false
     */
    resendConfirmation?: boolean | Expression<boolean>;
    /** Set the answers to all questions
     * @default {}
     */
    simpleResponses?: {
        /** Details
     */
    details?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      questionKey?: string | Expression<string>;
      /** Text of the response to the question
       */
      responseText?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** The source that led to the registration
     */
    source?: string | Expression<string> | PlaceholderValue;
  };
};

export type GoToWebinarV1RegistrantCreateNode = {
  type: 'n8n-nodes-base.goToWebinar';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoToWebinarV1RegistrantCreateParams>;
};