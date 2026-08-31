/**
 * Vero Node - Version 1
 * Discriminator: resource=user, operation=alias
 */


interface Credentials {
  veroApi: CredentialReference;
}

/** Create, update and manage the subscription status of your users */
export type VeroV1UserAliasParams = {
  resource: 'user';
  operation: 'alias';
/**
 * The old unique identifier of the user
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * The new unique identifier of the user
 */
    newId?: string | Expression<string> | PlaceholderValue;
};

export type VeroV1UserAliasNode = {
  type: 'n8n-nodes-base.vero';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<VeroV1UserAliasParams>;
};