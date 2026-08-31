/**
 * Supabase Node - Version 1
 * Discriminator: resource=row, operation=update
 */


interface Credentials {
  supabaseApi: CredentialReference;
}

/** Update a row */
export type SupabaseV1RowUpdateParams = {
  resource: 'row';
  operation: 'update';
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
 * Select Type
 * @default manual
 */
    filterType?: 'manual' | 'string' | Expression<string>;
/**
 * Must Match
 * @displayOptions.show { filterType: ["manual"] }
 * @default anyFilter
 */
    matchType?: 'anyFilter' | 'allFilters' | Expression<string>;
/**
 * Filter to decide which rows get updated
 * @displayOptions.show { filterType: ["manual"] }
 * @default {}
 */
    filters?: {
        /** Conditions
     */
    conditions?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      keyName?: string | Expression<string>;
      /** Condition
       */
      condition?: 'eq' | 'fullText' | 'gt' | 'gte' | 'ilike' | 'is' | 'lt' | 'lte' | 'like' | 'neq' | Expression<string>;
      /** Search Function
       * @displayOptions.show { condition: ["fullText"] }
       */
      searchFunction?: 'fts' | 'plfts' | 'phfts' | 'wfts' | Expression<string>;
      /** Field Value
       */
      keyValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Filters (String)
 * @displayOptions.show { filterType: ["string"] }
 */
    filterString?: string | Expression<string> | PlaceholderValue;
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

export type SupabaseV1RowUpdateOutput = {
  created_at?: string;
};

export type SupabaseV1RowUpdateNode = {
  type: 'n8n-nodes-base.supabase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SupabaseV1RowUpdateParams>;
  output?: Items<SupabaseV1RowUpdateOutput>;
};