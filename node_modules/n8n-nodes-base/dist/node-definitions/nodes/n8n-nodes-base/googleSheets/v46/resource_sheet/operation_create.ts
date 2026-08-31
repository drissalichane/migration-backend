/**
 * Google Sheets Node - Version 4.6
 * Discriminator: resource=sheet, operation=create
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Create a new sheet */
export type GoogleSheetsV46SheetCreateParams = {
  resource: 'sheet';
  operation: 'create';
  authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * Document
 * @builderHint Default to mode: 'list' which is easier for users to set up
 * @default {"mode":"list","value":""}
 */
    documentId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * The name of the sheet
 * @default n8n-sheet
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether the sheet is hidden in the UI, false if it's visible
     * @default false
     */
    hidden?: boolean | Expression<boolean>;
    /** Whether the sheet is an RTL sheet instead of an LTR sheet
     * @default false
     */
    rightToLeft?: boolean | Expression<boolean>;
    /** The ID of the sheet. Must be non-negative. This field cannot be changed once set.
     * @default 0
     */
    sheetId?: number | Expression<number>;
    /** The index of the sheet within the spreadsheet
     * @default 0
     */
    index?: number | Expression<number>;
    /** The color of the tab in the UI
     * @default 0aa55c
     */
    tabColor?: string | Expression<string>;
  };
};

export type GoogleSheetsV46SheetCreateNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 4.6;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV46SheetCreateParams>;
};