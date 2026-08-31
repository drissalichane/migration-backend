/**
 * Microsoft Excel 365 Node - Version 2.2
 * Discriminator: resource=table, operation=append
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV22TableAppendParams = {
  resource: 'table';
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
 * Table
 * @default {"mode":"list","value":""}
 */
    table?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
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
    /** Specifies the relative position of the new row. If not defined, the addition happens at the end. Any row below the inserted row will be shifted downwards. First row index is 0.
     * @default 0
     */
    index?: number | Expression<number>;
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

export type MicrosoftExcelV22TableAppendNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV22TableAppendParams>;
};