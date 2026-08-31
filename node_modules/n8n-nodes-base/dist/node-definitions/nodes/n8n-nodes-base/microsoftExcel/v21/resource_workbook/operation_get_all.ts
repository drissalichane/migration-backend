/**
 * Microsoft Excel 365 Node - Version 2.1
 * Discriminator: resource=workbook, operation=getAll
 */


interface Credentials {
  microsoftExcelOAuth2Api: CredentialReference;
}

/** A workbook is the top level object which contains one or more worksheets */
export type MicrosoftExcelV21WorkbookGetAllParams = {
  resource: 'workbook';
  operation: 'getAll';
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
    /** A comma-separated list of the fields to include in the response
     */
    fields?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftExcelV21WorkbookGetAllNode = {
  type: 'n8n-nodes-base.microsoftExcel';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftExcelV21WorkbookGetAllParams>;
};