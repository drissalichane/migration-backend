/**
 * Microsoft Excel 365 Node - Version 2
 * Discriminator: resource=workbook, operation=addWorksheet
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A workbook is the top level object which contains one or more worksheets */
export type MicrosoftExcelV2WorkbookAddWorksheetParams = {
  resource: 'workbook';
  operation: 'addWorksheet';
/**
 * Workbook
 * @default {"mode":"list","value":""}
 */
    workbook?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Options
 * @default {}
 */
    additionalFields?: {
    /** The name of the sheet to be added. The name should be unique. If not specified, Excel will determine the name of the new worksheet.
     */
    name?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftExcelV2WorkbookAddWorksheetNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV2WorkbookAddWorksheetParams>;
};