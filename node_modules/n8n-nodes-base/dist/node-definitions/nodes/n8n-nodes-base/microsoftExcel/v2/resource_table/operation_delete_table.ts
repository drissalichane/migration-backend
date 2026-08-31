/**
 * Microsoft Excel 365 Node - Version 2
 * Discriminator: resource=table, operation=deleteTable
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV2TableDeleteTableParams = {
  resource: 'table';
  operation: 'deleteTable';
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

export type MicrosoftExcelV2TableDeleteTableNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV2TableDeleteTableParams>;
};