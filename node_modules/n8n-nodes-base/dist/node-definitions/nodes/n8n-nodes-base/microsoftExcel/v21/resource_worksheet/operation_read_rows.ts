/**
 * Microsoft Excel 365 Node - Version 2.1
 * Discriminator: resource=worksheet, operation=readRows
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A sheet is a grid of cells which can contain data, tables, charts, etc */
export type MicrosoftExcelV21WorksheetReadRowsParams = {
  resource: 'worksheet';
  operation: 'readRows';
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
 * Select a Range
 * @default false
 */
    useRange?: boolean | Expression<boolean>;
/**
 * The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported
 * @hint Leave blank to return entire sheet
 * @displayOptions.show { useRange: [true] }
 */
    range?: string | Expression<string> | PlaceholderValue;
/**
 * Relative to selected 'Range', first row index is 0
 * @hint Index of the row which contains the column names
 * @displayOptions.show { useRange: [true] }
 * @default 0
 */
    keyRow?: number | Expression<number>;
/**
 * Relative to selected 'Range', first row index is 0
 * @hint Index of first row which contains the actual data
 * @displayOptions.show { useRange: [true] }
 * @default 1
 */
    dataStartRow?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether the data should be returned RAW instead of parsed into keys according to their header
     * @default 0
     */
    rawData?: boolean | Expression<boolean>;
    /** The name of the property into which to write the RAW data
     * @displayOptions.show { rawData: [true] }
     * @default data
     */
    dataProperty?: string | Expression<string> | PlaceholderValue;
    /** Fields the response will containt. Multiple can be added separated by ,.
     * @displayOptions.show { rawData: [true] }
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftExcelV21WorksheetReadRowsNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV21WorksheetReadRowsParams>;
};