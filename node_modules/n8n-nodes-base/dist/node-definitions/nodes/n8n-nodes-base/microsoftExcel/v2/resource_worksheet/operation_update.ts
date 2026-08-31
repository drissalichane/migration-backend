/**
 * Microsoft Excel 365 Node - Version 2
 * Discriminator: resource=worksheet, operation=update
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A sheet is a grid of cells which can contain data, tables, charts, etc */
export type MicrosoftExcelV2WorksheetUpdateParams = {
  resource: 'worksheet';
  operation: 'update';
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
 * The sheet range to read the data from specified using a A1-style notation, has to be specific e.g A1:B5, generic ranges like A:B are not supported. Leave blank to use whole used range in the sheet.
 * @hint First row must contain column names
 * @displayOptions.show { dataMode: ["autoMap", "define"], useRange: [true] }
 */
    range?: string | Expression<string> | PlaceholderValue;
/**
 * Data Mode
 * @default define
 */
    dataMode?: 'autoMap' | 'define' | 'raw' | Expression<string>;
/**
 * Raw values for the specified range as array of string arrays in JSON format. Should match the specified range: one array item for each row.
 * @displayOptions.show { dataMode: ["raw"] }
 */
    data?: IDataObject | string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @hint Used to find the correct row to update. Doesn't get changed.
 * @displayOptions.show { dataMode: ["autoMap", "define"] }
 */
    columnToMatchOn?: string | Expression<string>;
/**
 * Value of Column to Match On
 * @displayOptions.show { dataMode: ["define"] }
 */
    valueToMatchOn?: string | Expression<string> | PlaceholderValue;
/**
 * Values to Send
 * @displayOptions.show { dataMode: ["define"] }
 * @default {}
 */
    fieldsUi?: {
        /** Field
     */
    values?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      column?: string | Expression<string>;
      /** Value
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
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
    /** Whether to update all matching rows or just the first match
     * @displayOptions.hide { /dataMode: ["raw"] }
     * @default false
     */
    updateAll?: boolean | Expression<boolean>;
  };
};

export type MicrosoftExcelV2WorksheetUpdateNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV2WorksheetUpdateParams>;
};