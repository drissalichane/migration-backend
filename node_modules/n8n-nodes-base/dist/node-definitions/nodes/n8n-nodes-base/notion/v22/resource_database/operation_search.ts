/**
 * Notion Node - Version 2.2
 * Discriminator: resource=database, operation=search
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Search databases using text search */
export type NotionV22DatabaseSearchParams = {
  resource: 'database';
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

export type NotionV22DatabaseSearchOutput = {
  id?: string;
  name?: string;
  url?: string;
};

export type NotionV22DatabaseSearchNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<NotionV22DatabaseSearchParams>;
  output?: Items<NotionV22DatabaseSearchOutput>;
};