/**
 * Microsoft Excel Node - Version 1
 * Discriminator: resource=worksheet, operation=getAll
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** An Excel worksheet is a grid of cells. It can contain data, tables, charts, etc. */
export type MicrosoftExcelV1WorksheetGetAllParams = {
  resource: 'worksheet';
  operation: 'getAll';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    workbook?: string | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Fields the response will containt. Multiple can be added separated by ,.
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftExcelV1WorksheetGetAllNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV1WorksheetGetAllParams>;
};