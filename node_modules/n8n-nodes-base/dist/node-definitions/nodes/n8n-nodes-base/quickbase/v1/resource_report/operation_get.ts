/**
 * Quick Base Node - Version 1
 * Discriminator: resource=report, operation=get
 */


interface Credentials {
  quickbaseApi: CredentialReference;
}

/** Get a report */
export type QuickbaseV1ReportGetParams = {
  resource: 'report';
  operation: 'get';
/**
 * The table identifier
 */
    tableId?: string | Expression<string> | PlaceholderValue;
/**
 * The identifier of the report, unique to the table
 */
    reportId?: string | Expression<string> | PlaceholderValue;
};

export type QuickbaseV1ReportGetNode = {
  type: 'n8n-nodes-base.quickbase';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<QuickbaseV1ReportGetParams>;
};