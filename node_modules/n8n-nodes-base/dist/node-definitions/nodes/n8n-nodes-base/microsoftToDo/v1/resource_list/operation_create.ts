/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=list, operation=create
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1ListCreateParams = {
  resource: 'list';
  operation: 'create';
/**
 * List display name
 */
    displayName?: string | Expression<string> | PlaceholderValue;
};

export type MicrosoftToDoV1ListCreateOutput = {
  '@odata.context'?: string;
  '@odata.etag'?: string;
  displayName?: string;
  id?: string;
  isOwner?: boolean;
  isShared?: boolean;
  wellknownListName?: string;
};

export type MicrosoftToDoV1ListCreateNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1ListCreateParams>;
  output?: Items<MicrosoftToDoV1ListCreateOutput>;
};