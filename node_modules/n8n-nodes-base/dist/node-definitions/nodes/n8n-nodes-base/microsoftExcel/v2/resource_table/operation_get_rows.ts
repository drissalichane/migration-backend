/**
 * Microsoft Excel 365 Node - Version 2
 * Discriminator: resource=table, operation=getRows
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV2TableGetRowsParams = {
  resource: 'table';
  operation: 'getRows';
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
 * @default {}
 */
    filters?: {
    /** A comma-separated list of the fields to include in the response
     * @displayOptions.show { /rawData: [true] }
     */
    fields?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @displayOptions.show { /rawData: [false] }
     * @default []
     */
    column?: string[];
  };
};

export type MicrosoftExcelV2TableGetRowsNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV2TableGetRowsParams>;
};