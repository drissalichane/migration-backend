/**
 * Google Sheets Node - Version 4.4
 * Discriminator: resource=sheet, operation=appendOrUpdate
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Append a new row or update an existing one (upsert) */
export type GoogleSheetsV44SheetAppendOrUpdateParams = {
  resource: 'sheet';
  operation: 'appendOrUpdate';
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
 * Columns
 * @displayOptions.hide { sheetName: [""] }
 * @default {"mappingMode":"defineBelow","value":null}
 */
    columns?: string;
/**
 * Options
 * @displayOptions.hide { sheetName: [""] }
 * @default {}
 */
    options?: {
    /** Determines how data should be interpreted
     * @default USER_ENTERED
     */
    cellFormat?: 'USER_ENTERED' | 'RAW' | Expression<string>;
    /** Data Location on Sheet
     * @default {"values":{}}
     */
    locationDefine?: {
        /** Values
     */
    values?: {
      /** Index is relative to the set 'Range', first row index is 1
       * @hint Index of the row which contains the column names
       * @default 1
       */
      headerRow?: number | Expression<number>;
      /** Index is relative to the set 'Range', first row index is 1
       * @hint Index of first row which contains the actual data
       * @default 2
       */
      firstDataRow?: number | Expression<number>;
    };
  };
    /** What do to with fields that don't match any columns in the Google Sheet
     * @displayOptions.show { /dataMode: ["autoMapInputData"] }
     * @default insertInNewColumn
     */
    handlingExtraData?: 'insertInNewColumn' | 'ignoreIt' | 'error' | Expression<string>;
    /** What do to with fields that don't match any columns in the Google Sheet
     * @displayOptions.show { /columns.mappingMode: ["autoMapInputData"] }
     * @default insertInNewColumn
     */
    handlingExtraData?: 'insertInNewColumn' | 'ignoreIt' | 'error' | Expression<string>;
    /** Whether to use append instead of update(default), this is more efficient but in some cases data might be misaligned
     * @hint Use if your sheet has no gaps between rows or columns
     * @default false
     */
    useAppend?: boolean | Expression<boolean>;
  };
};

export type GoogleSheetsV44SheetAppendOrUpdateNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 4.4;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV44SheetAppendOrUpdateParams>;
};