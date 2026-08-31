/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=list, operation=update
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1ListUpdateParams = {
  resource: 'list';
  operation: 'update';
/**
 * The identifier of the list, unique in the user's mailbox
 */
    listId?: string | Expression<string> | PlaceholderValue;
/**
 * List display name
 */
    displayName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftToDoV1ListUpdateNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1ListUpdateParams>;
};