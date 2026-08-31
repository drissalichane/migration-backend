/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=list, operation=get
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1ListGetParams = {
  resource: 'list';
  operation: 'get';
/**
 * The identifier of the list, unique in the user's mailbox
 */
    listId?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftToDoV1ListGetOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  displayName?: string;
  id?: string;
  isOwner?: boolean;
  isShared?: boolean;
  wellknownListName?: string;
};

export type MicrosoftToDoV1ListGetNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1ListGetParams>;
  output?: Items<MicrosoftToDoV1ListGetOutput>;
};