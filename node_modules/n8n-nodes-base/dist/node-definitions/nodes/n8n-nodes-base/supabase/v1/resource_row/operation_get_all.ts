/**
 * Supabase Node - Version 1
 * Discriminator: resource=row, operation=getAll
 */


interface Credentials {
  supabaseApi: CredentialReference;
}

/** Get many rows */
export type SupabaseV1RowGetAllParams = {
  resource: 'row';
  operation: 'getAll';
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
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Filter
 * @default manual
 */
    filterType?: 'none' | 'manual' | 'string' | Expression<string>;
/**
 * Must Match
 * @displayOptions.show { filterType: ["manual"] }
 * @default anyFilter
 */
    matchType?: 'anyFilter' | 'allFilters' | Expression<string>;
/**
 * Filter to decide which rows get retrieved
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
};

export type SupabaseV1RowGetAllOutput = {
  created_at?: string;
};

export type SupabaseV1RowGetAllNode = {
  type: 'n8n-nodes-base.supabase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SupabaseV1RowGetAllParams>;
  output?: Items<SupabaseV1RowGetAllOutput>;
};