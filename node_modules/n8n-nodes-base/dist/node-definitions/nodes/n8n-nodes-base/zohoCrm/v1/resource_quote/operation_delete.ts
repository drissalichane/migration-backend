/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=quote, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1QuoteDeleteParams = {
  resource: 'quote';
  operation: 'delete';
/**
 * ID of the quote to delete
 */
    quoteId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1QuoteDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1QuoteDeleteParams>;
};