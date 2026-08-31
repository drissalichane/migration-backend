/**
 * Microsoft Excel 365 Node - Version 2.2
 * Discriminator: resource=worksheet, operation=deleteWorksheet
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A sheet is a grid of cells which can contain data, tables, charts, etc */
export type MicrosoftExcelV22WorksheetDeleteWorksheetParams = {
  resource: 'worksheet';
  operation: 'deleteWorksheet';
/**
 * Workbook
 * @default {"mode":"list","value":""}
 */
    workbook?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Sheet
 * @default {"mode":"list","value":""}
 */
    worksheet?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftExcelV22WorksheetDeleteWorksheetNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV22WorksheetDeleteWorksheetParams>;
};