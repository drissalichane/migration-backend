/**
 * Microsoft Excel 365 Node - Version 2.2
 * Discriminator: resource=table, operation=convertToRange
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV22TableConvertToRangeParams = {
  resource: 'table';
  operation: 'convertToRange';
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
/**
 * Table
 * @default {"mode":"list","value":""}
 */
    table?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
};

export type MicrosoftExcelV22TableConvertToRangeNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV22TableConvertToRangeParams>;
};