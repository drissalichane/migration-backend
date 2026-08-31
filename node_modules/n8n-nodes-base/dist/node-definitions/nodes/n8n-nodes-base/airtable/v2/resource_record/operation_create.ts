/**
 * Airtable Node - Version 2
 * Discriminator: resource=record, operation=create
 */


interface Credentials {
  airtableTokenApi: CredentialReference;
  airtableOAuth2Api: CredentialReference;
}

/** Create a new record in a table */
export type AirtableV2RecordCreateParams = {
  resource: 'record';
  operation: 'create';
  authentication?: 'airtableTokenApi' | 'airtableOAuth2Api' | Expression<string>;
/**
 * Base
 * @default {"mode":"list","value":""}
 */
    base?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Table
 * @default {"mode":"list","value":""}
 */
    table?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Columns
 * @default {"mappingMode":"defineBelow","value":null}
 */
    columns?: string;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether the Airtable API should attempt mapping of string values for linked records & select options
     * @default false
     */
    typecast?: boolean | Expression<boolean>;
    /** Comma-separated list of fields in input to ignore when updating
     * @displayOptions.show { /columns.mappingMode: ["autoMapInputData"] }
     */
    ignoreFields?: string | Expression<string> | PlaceholderValue;
    /** Whether to update all records matching the value in the "Column to Match On". If not set, only the first matching record will be updated.
     * @displayOptions.show { /operation: ["update", "upsert"] }
     * @default false
     */
    updateAllMatches?: boolean | Expression<boolean>;
  };
};

export type AirtableV2RecordCreateNode = {
  type: 'n8n-nodes-base.airtable';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<AirtableV2RecordCreateParams>;
};