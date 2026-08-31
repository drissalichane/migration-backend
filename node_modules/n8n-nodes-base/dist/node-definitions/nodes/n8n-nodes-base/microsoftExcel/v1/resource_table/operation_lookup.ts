/**
 * Microsoft Excel Node - Version 1
 * Discriminator: resource=table, operation=lookup
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** Represents an Excel table */
export type MicrosoftExcelV1TableLookupParams = {
  resource: 'table';
  operation: 'lookup';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    workbook?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    worksheet?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    table?: string | Expression<string>;
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

export type MicrosoftExcelV1TableLookupNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV1TableLookupParams>;
};