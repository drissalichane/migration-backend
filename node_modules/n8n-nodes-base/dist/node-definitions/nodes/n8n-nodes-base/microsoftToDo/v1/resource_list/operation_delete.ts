/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=list, operation=delete
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1ListDeleteParams = {
  resource: 'list';
  operation: 'delete';
/**
 * The identifier of the list, unique in the user's mailbox
 */
    listId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftToDoV1ListDeleteNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1ListDeleteParams>;
};