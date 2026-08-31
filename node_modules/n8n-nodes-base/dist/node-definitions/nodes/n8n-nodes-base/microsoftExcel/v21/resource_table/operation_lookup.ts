/**
 * Microsoft Excel 365 Node - Version 2.1
 * Discriminator: resource=table, operation=lookup
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV21TableLookupParams = {
  resource: 'table';
  operation: 'lookup';
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
/**
 * The name of the column in which to look for value
 */
    lookupColumn?: string | Expression<string> | PlaceholderValue;
/**
 * The value to look for in column
 */
    lookupValue?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** By default only the first result gets returned. If options gets set all found matches get returned.
     * @default false
     */
    returnAllMatches?: boolean | Expression<boolean>;
  };
};

export type MicrosoftExcelV21TableLookupNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV21TableLookupParams>;
};