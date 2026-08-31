/**
 * Data table Node - Version 1.1
 * Discriminator: resource=row, operation=insert
 */


/** Insert a new row */
export type DataTableV11RowInsertParams = {
  resource: 'row';
  operation: 'insert';
/**
 * Data table
 * @builderHint Default to mode: 'list' which is easier for users to set up
 * @default {"mode":"list","value":""}
 */
    dataTableId?: { __rl: true; mode: 'list' | 'name' | 'id'; value: string; cachedResultName?: string };
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
    /** Whether to improve bulk insert performance 5x by not returning inserted data
     * @default false
     */
    optimizeBulk?: boolean;
  };
};

export type DataTableV11RowInsertOutput = {
  createdAt?: string;
  id?: number;
  updatedAt?: string;
};

export type DataTableV11RowInsertNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1.1;
  config: NodeConfig<DataTableV11RowInsertParams>;
  output?: Items<DataTableV11RowInsertOutput>;
};