/**
 * Microsoft Excel 365 Node - Version 2.1
 * Discriminator: resource=worksheet, operation=clear
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A sheet is a grid of cells which can contain data, tables, charts, etc */
export type MicrosoftExcelV21WorksheetClearParams = {
  resource: 'worksheet';
  operation: 'clear';
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
 * Apply To
 * @default All
 */
    applyTo?: 'All' | 'Formats' | 'Contents' | Expression<string>;
/**
 * Select a Range
 * @default false
 */
    useRange?: boolean | Expression<boolean>;
/**
 * The sheet range that would be cleared, specified using a A1-style notation
 * @hint Leave blank for entire worksheet
 * @displayOptions.show { useRange: [true] }
 */
    range?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftExcelV21WorksheetClearNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV21WorksheetClearParams>;
};