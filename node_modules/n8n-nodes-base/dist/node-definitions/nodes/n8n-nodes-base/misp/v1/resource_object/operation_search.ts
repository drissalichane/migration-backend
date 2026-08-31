/**
 * MISP Node - Version 1
 * Discriminator: resource=object, operation=search
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1ObjectSearchParams = {
  resource: 'object';
  operation: 'search';
/**
 * Whether to use JSON to specify the fields for the search request
 * @default false
 */
    useJson?: boolean | Expression<boolean>;
/**
 * Get more info at {YOUR_BASE_URL_SPECIFIED_IN_CREDENTIALS}/api/openapi#operation/restSearchAttributes
 * @displayOptions.show { useJson: [true] }
 */
    jsonOutput?: IDataObject | string | Expression<string>;
/**
 * Value
 * @displayOptions.show { useJson: [false] }
 */
    value?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @displayOptions.show { useJson: [false] }
 * @default {}
 */
    additionalFields?: {
    /** Category
     */
    category?: string | Expression<string> | PlaceholderValue;
    /** Deleted
     * @default false
     */
    deleted?: boolean | Expression<boolean>;
    /** Search by matching any tag names, event descriptions, attribute values or attribute comments
     * @displayOptions.hide { /resource: ["attribute"] }
     */
    searchall?: string | Expression<string> | PlaceholderValue;
    /** Tags
     * @hint Comma-separated list of tags
     */
    tags?: string | Expression<string> | PlaceholderValue;
    /** Type
     */
    type?: string | Expression<string> | PlaceholderValue;
    /** Published
     * @default false
     */
    published?: boolean | Expression<boolean>;
  };
};

export type MispV1ObjectSearchNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1ObjectSearchParams>;
};