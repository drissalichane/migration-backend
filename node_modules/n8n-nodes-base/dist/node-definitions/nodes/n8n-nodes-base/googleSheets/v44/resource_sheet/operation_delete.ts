/**
 * Google Sheets Node - Version 4.4
 * Discriminator: resource=sheet, operation=delete
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Delete columns or rows from a sheet */
export type GoogleSheetsV44SheetDeleteParams = {
  resource: 'sheet';
  operation: 'delete';
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
 * What to delete
 * @displayOptions.hide { sheetName: [""] }
 * @default rows
 */
    toDelete?: 'rows' | 'columns' | Expression<string>;
/**
 * The row number to delete from, The first row is 2
 * @displayOptions.show { toDelete: ["rows", "columns"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default 2
 */
    startIndex?: number | Expression<number>;
/**
 * Number of Rows to Delete
 * @displayOptions.show { toDelete: ["rows", "columns"] }
 * @displayOptions.hide { sheetName: [""] }
 * @default 1
 */
    numberToDelete?: number | Expression<number>;
};

export type GoogleSheetsV44SheetDeleteNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 4.4;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV44SheetDeleteParams>;
};