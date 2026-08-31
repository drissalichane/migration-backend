/**
 * Wise Node - Version 1
 * Discriminator: resource=quote, operation=get
 */


interface Credentials {
  wiseApi: CredentialReference;
}

export type WiseV1QuoteGetParams = {
  resource: 'quote';
  operation: 'get';
/**
 * ID of the quote to retrieve
 */
    quoteId?: string | Expression<string> | PlaceholderValue;
};

export type WiseV1QuoteGetNode = {
  type: 'n8n-nodes-base.wise';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WiseV1QuoteGetParams>;
};