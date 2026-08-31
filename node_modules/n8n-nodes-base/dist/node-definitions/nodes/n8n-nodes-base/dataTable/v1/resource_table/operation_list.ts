/**
 * Data table Node - Version 1
 * Discriminator: resource=table, operation=list
 */


/** List all data tables */
export type DataTableV1TableListParams = {
  resource: 'table';
  operation: 'list';
/**
 * Whether to return all results or only up to a given limit
 * @default true
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Filter data tables by name (case-insensitive)
     */
    filterName?: string | Expression<string> | PlaceholderValue;
    /** Field to sort by
     * @default name
     */
    sortField?: 'createdAt' | 'name' | 'updatedAt' | Expression<string>;
    /** Sort Direction
     * @default asc
     */
    sortDirection?: 'asc' | 'desc' | Expression<string>;
  };
};

export type DataTableV1TableListNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1;
  config: NodeConfig<DataTableV1TableListParams>;
};