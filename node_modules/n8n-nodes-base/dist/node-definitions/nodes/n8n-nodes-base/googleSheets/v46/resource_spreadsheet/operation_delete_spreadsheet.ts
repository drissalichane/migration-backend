/**
 * Google Sheets Node - Version 4.6
 * Discriminator: resource=spreadsheet, operation=deleteSpreadsheet
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Delete a spreadsheet */
export type GoogleSheetsV46SpreadsheetDeleteSpreadsheetParams = {
  resource: 'spreadsheet';
  operation: 'deleteSpreadsheet';
  authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * Document
 * @default {"mode":"list","value":""}
 */
    documentId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
};

export type GoogleSheetsV46SpreadsheetDeleteSpreadsheetNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 4.6;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV46SpreadsheetDeleteSpreadsheetParams>;
};