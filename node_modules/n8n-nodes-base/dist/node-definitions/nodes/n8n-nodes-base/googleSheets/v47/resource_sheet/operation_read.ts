/**
 * Google Sheets Node - Version 4.7
 * Discriminator: resource=sheet, operation=read
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Retrieve one or more rows from a sheet */
export type GoogleSheetsV47SheetReadParams = {
  resource: 'sheet';
  operation: 'read';
  authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * Document
 * @builderHint Default to mode: 'list' which is easier for users to set up
 * @default {"mode":"list","value":""}
 */
    documentId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Sheet
 * @builderHint Default to mode: 'list' which is easier for users to set up
 * @default {"mode":"list","value":""}
 */
    sheetName?: { __rl: true; mode: 'list' | 'url' | 'id' | 'name'; value: string; cachedResultName?: string };
/**
 * Filters
 * @displayOptions.hide { sheetName: [""] }
 * @default {}
 */
    filtersUI?: {
        /** Filter
     */
    values?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      lookupColumn?: string | Expression<string>;
      /** Value
       * @hint The column must have this value to be matched
       */
      lookupValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * How to combine the conditions defined in "Filters": AND requires all conditions to be true, OR requires at least one condition to be true
 * @displayOptions.hide { sheetName: [""] }
 * @default AND
 */
    combineFilters?: 'AND' | 'OR' | Expression<string>;
/**
 * Options
 * @displayOptions.hide { sheetName: [""] }
 * @default {}
 */
    options?: {
    /** Data Location on Sheet
     * @default {"values":{"rangeDefinition":"detectAutomatically"}}
     */
    dataLocationOnSheet?: {
        /** Values
     */
    values?: {
      /** Range Definition
       */
      rangeDefinition?: 'detectAutomatically' | 'specifyRangeA1' | 'specifyRange' | Expression<string>;
      /** Read Rows Until
       * @displayOptions.show { rangeDefinition: ["detectAutomatically"] }
       * @default lastRowInSheet
       */
      readRowsUntil?: 'firstEmptyRow' | 'lastRowInSheet' | Expression<string>;
      /** Index is relative to the set 'Range', first row index is 1
       * @hint Index of the row which contains the column names
       * @displayOptions.show { rangeDefinition: ["specifyRange"] }
       * @default 1
       */
      headerRow?: number | Expression<number>;
      /** Index is relative to the set 'Range', first row index is 1
       * @hint Index of first row which contains the actual data
       * @displayOptions.show { rangeDefinition: ["specifyRange"] }
       * @default 2
       */
      firstDataRow?: number | Expression<number>;
      /** The table range to read from or to append data to. See the Google &lt;a href="https://developers.google.com/sheets/api/guides/values#writing"&gt;documentation&lt;/a&gt; for the details.
       * @hint You can specify both the rows and the columns, e.g. C4:E7
       * @displayOptions.show { rangeDefinition: ["specifyRangeA1"] }
       */
      range?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Output Formatting
     * @default {"values":{"general":"UNFORMATTED_VALUE","date":"FORMATTED_STRING"}}
     */
    outputFormatting?: {
        /** Values
     */
    values?: {
      /** Determines how values should be rendered in the output
       */
      general?: 'UNFORMATTED_VALUE' | 'FORMATTED_VALUE' | 'FORMULA' | Expression<string>;
      /** Date Formatting
       */
      date?: 'FORMATTED_STRING' | 'SERIAL_NUMBER' | Expression<string>;
    };
  };
    /** Whether to select the first row of the sheet or the first matching row (if filters are set)
     * @default false
     */
    returnFirstMatch?: boolean | Expression<boolean>;
    /** By default only the first result gets returned, Set to "Return All Matches" to get multiple matches
     * @default returnFirstMatch
     */
    returnAllMatches?: 'returnFirstMatch' | 'returnAllMatches' | Expression<string>;
  };
};

export type GoogleSheetsV47SheetReadNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 4.7;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV47SheetReadParams>;
};