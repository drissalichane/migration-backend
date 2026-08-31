/**
 * Notion Node - Version 2.1
 * Discriminator: resource=page, operation=search
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Search databases using text search */
export type NotionV21PageSearchParams = {
  resource: 'page';
  operation: 'search';
/**
 * The text to search for
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Filters
     * @default {}
     */
    filter?: {
        /** Filter
     */
    filters?: {
      /** The name of the property to filter by
       * @default object
       */
      property?: 'object' | Expression<string>;
      /** The value of the property to filter by
       */
      value?: 'database' | 'page' | Expression<string>;
    };
  };
    /** Sort
     * @default {}
     */
    sort?: {
        /** Sort
     */
    sortValue?: {
      /** The direction to sort
       * @default descending
       */
      direction?: 'ascending' | 'descending' | Expression<string>;
      /** The name of the timestamp to sort against
       * @default last_edited_time
       */
      timestamp?: 'last_edited_time' | Expression<string>;
    };
  };
  };
};

export type NotionV21PageSearchOutput = {
  id?: string;
  name?: string;
  url?: string;
};

export type NotionV21PageSearchNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<NotionV21PageSearchParams>;
  output?: Items<NotionV21PageSearchOutput>;
};