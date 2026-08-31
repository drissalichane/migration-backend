/**
 * ERPNext Node - Version 1
 * Discriminator: resource=document, operation=getAll
 */


interface Credentials {
  erpNextApi: CredentialReference;
}

/** Retrieve many documents */
export type ErpNextV1DocumentGetAllParams = {
  resource: 'document';
  operation: 'getAll';
/**
 * DocType whose documents to retrieve. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docType?: string | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 10
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Comma-separated list of fields to return. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    fields?: string[];
    /** Custom Properties
     * @default {}
     */
    filters?: {
        /** Property
     */
    customProperty?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      field?: string | Expression<string>;
      /** Operator
       * @default is
       */
      operator?: 'equalsGreater' | 'equalsLess' | 'is' | 'greater' | 'less' | 'isNot' | Expression<string>;
      /** Value of the operator condition
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
};

export type ErpNextV1DocumentGetAllNode = {
  type: 'n8n-nodes-base.erpNext';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ErpNextV1DocumentGetAllParams>;
};