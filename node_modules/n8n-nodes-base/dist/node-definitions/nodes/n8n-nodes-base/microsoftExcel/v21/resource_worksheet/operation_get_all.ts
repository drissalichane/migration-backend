/**
 * Microsoft Excel 365 Node - Version 2.1
 * Discriminator: resource=worksheet, operation=getAll
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A sheet is a grid of cells which can contain data, tables, charts, etc */
export type MicrosoftExcelV21WorksheetGetAllParams = {
  resource: 'worksheet';
  operation: 'getAll';
/**
 * Workbook
 * @default {"mode":"list","value":""}
 */
    workbook?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** A comma-separated list of the fields to include in the response
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftExcelV21WorksheetGetAllNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV21WorksheetGetAllParams>;
};