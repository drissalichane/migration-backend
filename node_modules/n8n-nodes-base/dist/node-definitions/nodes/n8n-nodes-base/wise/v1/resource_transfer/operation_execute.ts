/**
 * Wise Node - Version 1
 * Discriminator: resource=transfer, operation=execute
 */


interface Credentials {
  wiseApi: CredentialReference;
}

export type WiseV1TransferExecuteParams = {
  resource: 'transfer';
  operation: 'execute';
/**
 * ID of the user profile to execute the transfer under. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    profileId?: string | Expression<string>;
/**
 * ID of the transfer to execute
 */
    transferId?: string | Expression<string> | PlaceholderValue;
};

export type WiseV1TransferExecuteNode = {
  type: 'n8n-nodes-base.wise';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WiseV1TransferExecuteParams>;
};