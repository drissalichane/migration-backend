/**
 * Microsoft Excel 365 Node - Version 2
 * Discriminator: resource=workbook, operation=deleteWorkbook
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A workbook is the top level object which contains one or more worksheets */
export type MicrosoftExcelV2WorkbookDeleteWorkbookParams = {
  resource: 'workbook';
  operation: 'deleteWorkbook';
/**
 * Workbook
 * @default {"mode":"list","value":""}
 */
    workbook?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftExcelV2WorkbookDeleteWorkbookNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV2WorkbookDeleteWorkbookParams>;
};