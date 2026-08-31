/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=search, operation=lookup
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Search for the name or email address of records */
export type FreshworksCrmV1SearchLookupParams = {
  resource: 'search';
  operation: 'lookup';
/**
 * Field against which the entities have to be searched
 */
    searchField?: 'email' | 'name' | 'customField' | Expression<string>;
/**
 * Custom Field Name
 * @displayOptions.show { searchField: ["customField"] }
 */
    customFieldName?: string | Expression<string> | PlaceholderValue;
/**
 * Custom Field Value
 * @displayOptions.show { searchField: ["customField"] }
 */
    customFieldValue?: string | Expression<string> | PlaceholderValue;
/**
 * Field Value
 * @displayOptions.show { searchField: ["email", "name"] }
 */
    fieldValue?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Use 'entities' to query against related entities. You can include multiple entities at once, provided the field is available in both entities or else you'd receive an error response.
     * @default []
     */
    entities?: Array<'contact' | 'deal' | 'sales_account'>;
  };
};

export type FreshworksCrmV1SearchLookupNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1SearchLookupParams>;
};