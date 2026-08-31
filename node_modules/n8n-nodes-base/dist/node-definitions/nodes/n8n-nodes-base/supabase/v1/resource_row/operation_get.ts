/**
 * Supabase Node - Version 1
 * Discriminator: resource=row, operation=get
 */


interface Credentials {
  supabaseApi: CredentialReference;
}

/** Get a row */
export type SupabaseV1RowGetParams = {
  resource: 'row';
  operation: 'get';
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
 * Select Conditions
 * @default {}
 */
    filters?: {
        /** Conditions
     */
    conditions?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      keyName?: string | Expression<string>;
      /** Value
       */
      keyValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type SupabaseV1RowGetOutput = {
  created_at?: string;
};

export type SupabaseV1RowGetNode = {
  type: 'n8n-nodes-base.supabase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SupabaseV1RowGetParams>;
  output?: Items<SupabaseV1RowGetOutput>;
};