/**
 * Google Sheets Node - Version 3
 * Discriminator: resource=sheet, operation=append
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Create a new row in a sheet */
export type GoogleSheetsV3SheetAppendParams = {
  resource: 'sheet';
  operation: 'append';
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
 * Whether to insert the input data this node receives in the new row
 * @displayOptions.hide { sheetName: [""] }
 * @default defineBelow
 */
    dataMode?: 'autoMapInputData' | 'defineBelow' | 'nothing' | Expression<string>;
/**
 * Fields to Send
 * @displayOptions.show { dataMode: ["defineBelow"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default {}
 */
    fieldsUi?: {
        /** Field
     */
    fieldValues?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      fieldId?: string | Expression<string>;
      /** Field Value
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
    }>;
  };
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
      /** Index of the row which contains the keys. Starts at 1. The incoming node data is matched to the keys for assignment. The matching is case sensitive.
       * @default 1
       */
      headerRow?: number | Expression<number>;
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

export type GoogleSheetsV3SheetAppendNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 3;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV3SheetAppendParams>;
};