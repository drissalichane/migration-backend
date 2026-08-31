/**
 * Google Sheets Node - Version 3
 * Discriminator: resource=sheet, operation=clear
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Delete all the contents or a part of a sheet */
export type GoogleSheetsV3SheetClearParams = {
  resource: 'sheet';
  operation: 'clear';
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
 * What to clear
 * @displayOptions.hide { sheetName: [""] }
 * @default wholeSheet
 */
    clear?: 'wholeSheet' | 'specificRows' | 'specificColumns' | 'specificRange' | Expression<string>;
/**
 * Keep First Row
 * @displayOptions.show { clear: ["wholeSheet"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default false
 */
    keepFirstRow?: boolean | Expression<boolean>;
/**
 * The row number to delete from, The first row is 1
 * @displayOptions.show { clear: ["specificRows"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default 1
 */
    startIndex?: number | Expression<number>;
/**
 * Number of Rows to Delete
 * @displayOptions.show { clear: ["specificRows"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default 1
 */
    rowsToDelete?: number | Expression<number>;
/**
 * Number of Columns to Delete
 * @displayOptions.show { clear: ["specificColumns"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default 1
 */
    columnsToDelete?: number | Expression<number>;
/**
 * The table range to read from or to append data to. See the Google &lt;a href="https://developers.google.com/sheets/api/guides/values#writing"&gt;documentation&lt;/a&gt; for the details. If it contains multiple sheets it can also be added like this: "MySheet!A:F"
 * @displayOptions.show { clear: ["specificRange"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default A:F
 */
    range?: string | Expression<string> | PlaceholderValue;
};

export type GoogleSheetsV3SheetClearNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 3;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV3SheetClearParams>;
};