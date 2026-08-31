/**
 * Microsoft Excel 365 Node - Version 2.2
 * Discriminator: resource=table, operation=addTable
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV22TableAddTableParams = {
  resource: 'table';
  operation: 'addTable';
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
 * Select Range
 * @default auto
 */
    selectRange?: 'auto' | 'manual' | Expression<string>;
/**
 * The range of cells that will be converted to a table
 * @displayOptions.show { selectRange: ["manual"] }
 */
    range?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the range has column labels. When this property set to false Excel will automatically generate header shifting the data down by one row.
 * @default true
 */
    hasHeaders?: boolean | Expression<boolean>;
};

export type MicrosoftExcelV22TableAddTableNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV22TableAddTableParams>;
};