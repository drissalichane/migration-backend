/**
 * Intercom Node - Version 1
 * Discriminator: resource=company, operation=update
 */


interface Credentials {
  intercomApi: CredentialReference;
}

/** Companies allow you to represent commercial organizations using your product */
export type IntercomV1CompanyUpdateParams = {
  resource: 'company';
  operation: 'update';
/**
 * The company ID you have defined for the company
 */
    companyId?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The industry that this company operates in
     */
    industry?: string | Expression<string> | PlaceholderValue;
    /** The phone number of the user
     */
    monthlySpend?: string | Expression<string> | PlaceholderValue;
    /** Name of the user
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** The name of the plan you have associated with the company
     */
    plan?: string | Expression<string> | PlaceholderValue;
    /** The number of employees in this company
     */
    size?: number | Expression<number>;
    /** The URL for this company's website. Please note that the value specified here is not validated. Accepts any string.
     */
    website?: string | Expression<string> | PlaceholderValue;
  };
/**
 * A hash of key/value pairs to represent custom data you want to attribute to a user
 * @displayOptions.show { jsonParameters: [true] }
 */
    customAttributesJson?: IDataObject | string | Expression<string>;
/**
 * A hash of key/value pairs to represent custom data you want to attribute to a user
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    customAttributesUi?: {
        /** Attributes
     */
    customAttributesValues?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type IntercomV1CompanyUpdateNode = {
  type: 'n8n-nodes-base.intercom';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<IntercomV1CompanyUpdateParams>;
};