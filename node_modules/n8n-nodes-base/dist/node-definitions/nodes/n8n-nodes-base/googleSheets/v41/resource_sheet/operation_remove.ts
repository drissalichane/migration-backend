/**
 * Google Sheets Node - Version 4.1
 * Discriminator: resource=sheet, operation=remove
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Permanently delete a sheet */
export type GoogleSheetsV41SheetRemoveParams = {
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

export type GoogleSheetsV41SheetRemoveNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 4.1;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV41SheetRemoveParams>;
};