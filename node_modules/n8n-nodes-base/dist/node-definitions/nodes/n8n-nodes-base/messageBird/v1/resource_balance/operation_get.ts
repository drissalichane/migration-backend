/**
 * MessageBird Node - Version 1
 * Discriminator: resource=balance, operation=get
 */


interface Credentials {
  messageBirdApi: CredentialReference;
}

/** Get the balance */
export type MessageBirdV1BalanceGetParams = {
  resource: 'balance';
  operation: 'get';
};

export type MessageBirdV1BalanceGetNode = {
  type: 'n8n-nodes-base.messageBird';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MessageBirdV1BalanceGetParams>;
};