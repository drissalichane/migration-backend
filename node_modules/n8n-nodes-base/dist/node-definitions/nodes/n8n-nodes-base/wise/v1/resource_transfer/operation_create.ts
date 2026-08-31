/**
 * Wise Node - Version 1
 * Discriminator: resource=transfer, operation=create
 */


interface Credentials {
  wiseApi: CredentialReference;
}

export type WiseV1TransferCreateParams = {
  resource: 'transfer';
  operation: 'create';
/**
 * ID of the user profile to retrieve the balance of. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    profileId?: string | Expression<string>;
/**
 * ID of the quote based on which to create the transfer
 */
    quoteId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the account that will receive the funds. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    targetAccountId?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Reference text to show in the recipient's bank statement
     */
    reference?: string | Expression<string> | PlaceholderValue;
  };
};

export type WiseV1TransferCreateNode = {
  type: 'n8n-nodes-base.wise';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WiseV1TransferCreateParams>;
};