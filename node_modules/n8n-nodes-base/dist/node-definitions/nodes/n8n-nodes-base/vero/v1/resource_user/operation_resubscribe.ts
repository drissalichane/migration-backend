/**
 * Vero Node - Version 1
 * Discriminator: resource=user, operation=resubscribe
 */


interface Credentials {
  veroApi: CredentialReference;
}

/** Create, update and manage the subscription status of your users */
export type VeroV1UserResubscribeParams = {
  resource: 'user';
  operation: 'resubscribe';
/**
 * The unique identifier of the user
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type VeroV1UserResubscribeNode = {
  type: 'n8n-nodes-base.vero';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VeroV1UserResubscribeParams>;
};