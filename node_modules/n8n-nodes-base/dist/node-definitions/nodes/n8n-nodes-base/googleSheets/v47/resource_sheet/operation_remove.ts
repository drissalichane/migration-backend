/**
 * Google Sheets Node - Version 4.7
 * Discriminator: resource=sheet, operation=remove
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Permanently delete a sheet */
export type GoogleSheetsV47SheetRemoveParams = {
  resource: 'sheet';
  operation: 'remove';
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
};

export type GoogleSheetsV47SheetRemoveNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 4.7;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV47SheetRemoveParams>;
};