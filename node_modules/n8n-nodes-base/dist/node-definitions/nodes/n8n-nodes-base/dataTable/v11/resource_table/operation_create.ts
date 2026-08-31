/**
 * Data table Node - Version 1.1
 * Discriminator: resource=table, operation=create
 */


/** Create a new data table */
export type DataTableV11TableCreateParams = {
  resource: 'table';
  operation: 'create';
/**
 * The name of the data table to create
 */
    tableName?: string | Expression<string> | PlaceholderValue;
/**
 * The columns to create in the data table
 * @default {}
 */
    columns?: {
        /** Column
     */
    column?: Array<{
      /** The name of the column
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** The type of the column
       * @default string
       */
      type?: 'boolean' | 'date' | 'number' | 'string' | Expression<string>;
    }>;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to return existing table if one exists with the same name without throwing an error
     * @default true
     */
    createIfNotExists?: boolean | Expression<boolean>;
  };
};

export type DataTableV11TableCreateNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1.1;
  config: NodeConfig<DataTableV11TableCreateParams>;
};