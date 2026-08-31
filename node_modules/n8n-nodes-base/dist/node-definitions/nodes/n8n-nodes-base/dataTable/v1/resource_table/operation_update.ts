/**
 * Data table Node - Version 1
 * Discriminator: resource=table, operation=update
 */


/** Update row(s) matching certain fields */
export type DataTableV1TableUpdateParams = {
  resource: 'table';
  operation: 'update';
/**
 * Data table
 * @builderHint Default to mode: 'list' which is easier for users to set up
 * @default {"mode":"list","value":""}
 */
    dataTableId?: { __rl: true; mode: 'list' | 'name' | 'id'; value: string; cachedResultName?: string };
/**
 * The new name for the data table
 */
    newName?: string | Expression<string> | PlaceholderValue;
};

export type DataTableV1TableUpdateNode = {
  type: 'n8n-nodes-base.dataTable';
  version: 1;
  config: NodeConfig<DataTableV1TableUpdateParams>;
};