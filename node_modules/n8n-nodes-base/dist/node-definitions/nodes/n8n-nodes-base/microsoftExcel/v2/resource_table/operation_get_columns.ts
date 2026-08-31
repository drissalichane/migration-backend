/**
 * Microsoft Excel 365 Node - Version 2
 * Discriminator: resource=table, operation=getColumns
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV2TableGetColumnsParams = {
  resource: 'table';
  operation: 'getColumns';
/**
 * Workbook
 * @default {"mode":"list","value":""}
 */
    workbook?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Sheet
 * @default {"mode":"list","value":""}
 */
    worksheet?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Table
 * @default {"mode":"list","value":""}
 */
    table?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
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
 * Whether the data should be returned RAW instead of parsed into keys according to their header
 * @default false
 */
    rawData?: boolean | Expression<boolean>;
/**
 * The name of the property into which to write the RAW data
 * @displayOptions.show { rawData: [true] }
 * @default data
 */
    dataProperty?: string | Expression<string> | PlaceholderValue;
/**
 * Filters
 * @displayOptions.show { rawData: [true] }
 * @default {}
 */
    filters?: {
    /** A comma-separated list of the fields to include in the response
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftExcelV2TableGetColumnsNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV2TableGetColumnsParams>;
};