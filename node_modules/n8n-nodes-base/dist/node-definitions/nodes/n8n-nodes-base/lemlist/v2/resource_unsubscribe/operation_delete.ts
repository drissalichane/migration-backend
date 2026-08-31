/**
 * Lemlist Node - Version 2
 * Discriminator: resource=unsubscribe, operation=delete
 */


interface Credentials {
  lemlistApi: CredentialReference;
}

export type LemlistV2UnsubscribeDeleteParams = {
  resource: 'unsubscribe';
  operation: 'delete';
/**
 * Email to delete from the unsubscribes
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type LemlistV2UnsubscribeDeleteNode = {
  type: 'n8n-nodes-base.lemlist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<LemlistV2UnsubscribeDeleteParams>;
};