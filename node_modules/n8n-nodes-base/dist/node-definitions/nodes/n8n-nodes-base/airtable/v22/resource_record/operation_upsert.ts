/**
 * Airtable Node - Version 2.2
 * Discriminator: resource=record, operation=upsert
 */


interface Credentials {
  airtableTokenApi: CredentialReference;
  airtableOAuth2Api: CredentialReference;
}

/** Create a new record, or update the current one if it already exists (upsert) */
export type AirtableV22RecordUpsertParams = {
  resource: 'record';
  operation: 'upsert';
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
     * @default false
     */
    updateAllMatches?: boolean | Expression<boolean>;
  };
};

export type AirtableV22RecordUpsertNode = {
  type: 'n8n-nodes-base.airtable';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<AirtableV22RecordUpsertParams>;
};