/**
 * Airtable Node - Version 2.2
 * Discriminator: resource=base, operation=getSchema
 */


interface Credentials {
  airtableTokenApi: CredentialReference;
  airtableOAuth2Api: CredentialReference;
}

/** Get the schema of the tables in a base */
export type AirtableV22BaseGetSchemaParams = {
  resource: 'base';
  operation: 'getSchema';
  authentication?: 'airtableTokenApi' | 'airtableOAuth2Api' | Expression<string>;
/**
 * The Airtable Base to retrieve the schema from
 * @default {"mode":"list","value":""}
 */
    base?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type AirtableV22BaseGetSchemaNode = {
  type: 'n8n-nodes-base.airtable';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<AirtableV22BaseGetSchemaParams>;
};