/**
 * Coda Node - Version 1
 * Discriminator: resource=formula, operation=get
 */


interface Credentials {
  codaApi: CredentialReference;
}

/** Formulas can be great for performing one-off computations */
export type CodaV1FormulaGetParams = {
  resource: 'formula';
  operation: 'get';
/**
 * ID of the doc. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    docId?: string | Expression<string>;
/**
 * The formula to get the row from
 */
    formulaId?: string | Expression<string> | PlaceholderValue;
};

export type CodaV1FormulaGetNode = {
  type: 'n8n-nodes-base.coda';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CodaV1FormulaGetParams>;
};