/**
 * Supabase Node - Version 1
 * Discriminator: resource=row, operation=create
 */


interface Credentials {
  supabaseApi: CredentialReference;
}

/** Create a new row */
export type SupabaseV1RowCreateParams = {
  resource: 'row';
  operation: 'create';
/**
 * Whether to use a database schema different from the default "public" schema (requires schema exposure in the &lt;a href="https://supabase.com/docs/guides/api/using-custom-schemas?queryGroups=language&language=curl#exposing-custom-schemas"&gt;Supabase API&lt;/a&gt;)
 * @default false
 */
    useCustomSchema?: boolean;
/**
 * Name of database schema to use for table
 * @displayOptions.show { useCustomSchema: [true] }
 * @default public
 */
    schema?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    tableId?: string | Expression<string>;
/**
 * Data to Send
 * @default defineBelow
 */
    dataToSend?: 'autoMapInputData' | 'defineBelow' | Expression<string>;
/**
 * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
 * @displayOptions.show { dataToSend: ["autoMapInputData"] }
 */
    inputsToIgnore?: string | Expression<string> | PlaceholderValue;
/**
 * Fields to Send
 * @displayOptions.show { dataToSend: ["defineBelow"] }
 * @default {}
 */
    fieldsUi?: {
        /** Field
     */
    fieldValues?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      fieldId?: string | Expression<string>;
      /** Field Value
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type SupabaseV1RowCreateOutput = {
  created_at?: string;
};

export type SupabaseV1RowCreateNode = {
  type: 'n8n-nodes-base.supabase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SupabaseV1RowCreateParams>;
  output?: Items<SupabaseV1RowCreateOutput>;
};