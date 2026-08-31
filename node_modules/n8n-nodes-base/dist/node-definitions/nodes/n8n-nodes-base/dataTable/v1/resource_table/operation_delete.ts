/**
 * Data table Node - Version 1
 * Discriminator: resource=table, operation=delete
 */


/** Delete a data table */
export type DataTableV1TableDeleteParams = {
  resource: 'table';
  operation: 'delete';
/**
 * Data table
 * @builderHint Default to mode: 'list' which is easier for users to set up
 * @default {"mode":"list","value":""}
 */
    dataTableId?: { __rl: true; mode: 'list' | 'name' | 'id'; value: string; cachedResultName?: string };
};

export type DataTableV1TableDeleteNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1;
  config: NodeConfig<DataTableV1TableDeleteParams>;
};