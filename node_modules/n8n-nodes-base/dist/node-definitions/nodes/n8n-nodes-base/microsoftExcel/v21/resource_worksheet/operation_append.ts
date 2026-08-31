/**
 * Microsoft Excel 365 Node - Version 2.1
 * Discriminator: resource=worksheet, operation=append
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A sheet is a grid of cells which can contain data, tables, charts, etc */
export type MicrosoftExcelV21WorksheetAppendParams = {
  resource: 'worksheet';
  operation: 'append';
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
 * Data Mode
 * @default define
 */
    dataMode?: 'autoMap' | 'define' | 'raw' | Expression<string>;
/**
 * Raw values for the specified range as array of string arrays in JSON format
 * @displayOptions.show { dataMode: ["raw"] }
 */
    data?: IDataObject | string | Expression<string>;
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
  };
};

export type MicrosoftExcelV21WorksheetAppendNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV21WorksheetAppendParams>;
};